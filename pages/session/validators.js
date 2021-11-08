import elements from '../../Elements';
import lessonTypes from './lessonTypes';
import { lessonType } from '../../services';

export default class Validators {
	static learn(pageTypes, currentElement, currentOption, setIsCorrect, taught, setTaught, setState) {
        const atomicNumber = currentElement.number
        var state = {}
        if(atomicNumber === currentOption) {
            setIsCorrect(true)
            if (!taught?.includes(atomicNumber)) setTaught(atomicNumber)
            state = { 
            	...state,
            	modalData: { 
            		showModal: true,
            		type: pageTypes.learn,
            		text: '' 
            	} 
            }
    	}

        else {
            setIsCorrect(false);
            state = {
            	...state,
            	modalData: {
	                showModal: true,
	                type: pageTypes.learn,
	                repeat: true,
	                text: `The atomic number of ${currentElement.name} is ${atomicNumber}.`
            	}
            }
        }

        setState({
        	...state,
            previousMistake: false,
            currentOption: null,
        })
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