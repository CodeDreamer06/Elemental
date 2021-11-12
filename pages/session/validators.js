import elements from '../../Elements';
import lessonTypes from './lessonTypes';
import pageTypes from './pageTypes';
import store from '../../services/store';
import { lessonType } from '../../services';
import { addTaught } from '../../services/lesson'
import { changeModal } from '../../services/modal';

export default class Validators {
    static learn(currentOption) {
        const lesson = store.getState().lesson
        const { number, name } = lesson.currentElement
        const modalData = {
            showModal: true,
            type: pageTypes.learn,
            text: ''
        }
        if(number === currentOption) {
            store.dispatch(changeModal({ ...modalData, isCorrect: true, repeat: false }))
            if(!lesson.taught?.includes(number)) store.dispatch(addTaught(number))
        }
        else store.dispatch(changeModal({ ...modalData, isCorrect: false, repeat: true, text: `The atomic number of ${name} is ${number}.`}))
    }

    static dice(question, input, pageTypes, setIsCorrect, setState) {
        const answer = elements.find(el => el.number === question).name
        var state = {}
        if(answer.toLowerCase() === input.toLowerCase()) {
            setIsCorrect(true)
            state = {
                ...state,
                modalData: { 
                    showModal: true,
                    type: pageTypes.dice,
                    text: ''
                }
            }
        }

        else {
            setIsCorrect(false)
            state = {
                ...state,
                modalData: {
                    showModal: true,
                    type: pageTypes.dice,
                    repeat: true,
                    text: `${answer} is the atomic number of ${question}.`
                }
            }
        }

        setState({
            ...state,
            previousMistake: false,
            currentOption: null,
        })
    }

    static sort(question, sorted, setIsCorrect, sortPage, showModal) {
        if(JSON.stringify(question) === JSON.stringify(sorted)) {
            setIsCorrect(true)
            showModal(true, sortPage)
        }
        else {
            setIsCorrect(false)
            showModal(true, sortPage, 'Try again.')
        }
    }

    static mcq(pageTypes, currentQuestion, selectedOption, isCorrect, setIsCorrect, setState, AddSessionMistake, score, correctAnswers, wrongAnswers, progress, previousMistake, addHistory) {
        const currentLessonType = lessonType.get()
        var learnt = JSON.parse(localStorage.getItem("Numlearnt"))
        var modalData = {
            showModal: true,
            type: pageTypes.mcq,
            text: '',
        }        
        if(currentLessonType === lessonTypes.atomicNumber) {
            const atomicNumber = currentQuestion.number
            if(atomicNumber === selectedOption) {
                setIsCorrect(true)
                if (!learnt.includes(atomicNumber)) learnt.push(atomicNumber)
                localStorage.setItem("learnt", JSON.stringify(learnt))
            }

            else {
                setIsCorrect(false)
                AddSessionMistake(elements.find(el => el.number === atomicNumber))
                modalData = {
                    showModal: true,
                    type: pageTypes.mcq,
                    text: `The atomic number of ${currentQuestion.name} is ${currentQuestion.number}`
                }
            }

            const question = `What is the atomic number of ${currentQuestion.name}?`
            const userAnswer = selectedOption
            const correctAnswer = atomicNumber
            addHistory({ question, userAnswer, correctAnswer })
        }

        else if(currentLessonType === lessonTypes.atomicNames) {
            console.log('Lesson Type = Atomic Names')
            const { name: atomicName, number: atomicNumber } = currentQuestion

            if(atomicName === selectedOption) {
                setIsCorrect(true)
                if (!learnt.includes(atomicNumber)) learnt.push(atomicNumber)
                localStorage.setItem("learnt", JSON.stringify(learnt))
            }

            else {
                setIsCorrect(false)
                AddSessionMistake(elements.find(el => el.number === atomicNumber))
                modalData = {
                    showModal: true,
                    type: pageTypes.mcq,
                    text: `${currentQuestion.name}'s atomic number is ${currentQuestion.number}`
                }
            }

            const question = `Which element's atomic number is ${atomicNumber}?`
            const userAnswer = selectedOption
            const correctAnswer = atomicName
            addHistory({ question, userAnswer, correctAnswer })            
        }
        const sessionScore = isCorrect ? score + 1 : score;
        const sessionCorrectAnswers = isCorrect ? correctAnswers + 1 : correctAnswers;
        const sessionWrongAnswers = !isCorrect ? wrongAnswers + 1 : wrongAnswers;
        const percentageChange = isCorrect ? 10 : (progress > 10 ? -10 : 0)
        const newPercentage = progress + percentageChange;
        const percentage = !previousMistake ? newPercentage : progress;
        setState({ modalData, currentOption: null, percentage, sessionScore, sessionCorrectAnswers, sessionWrongAnswers });
    }
}