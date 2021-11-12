import elements from '../../Elements';
import lessonTypes from './lessonTypes';
import pageTypes from './pageTypes';
import store from '../../services/store';
import { lessonType } from '../../services';
import { addTaught, addLearnt } from '../../services/lesson'
import { changeModal } from '../../services/modal';
import { addPercentage, addScore } from '../../services/score';

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

    static mcq(currentOption) {
        const lesson = store.getState().lesson
        const { number, name } = lesson.currentElement
        const modalData = {
            showModal: true,
            type: pageTypes.mcq,
            text: ''
        }
        var currentPercentage = store.getState().score.percentage;
        if(number === currentOption) {
            store.dispatch(changeModal({ ...modalData, isCorrect: true, repeat: false }))
            if(!lesson.learnt?.includes(number)) store.dispatch(addLearnt(number))
            store.dispatch(addScore(1))
            store.dispatch(addPercentage(10))
        }
        // TODO: If wrong, add it to session mistakes    
        else { 
            store.dispatch(changeModal({ ...modalData, isCorrect: false, repeat: false, text: `The atomic number of ${name} is ${number}.`}))
            store.dispatch(addPercentage(currentPercentage > 10 ? -10 : 0))
        }
        // TODO: Add to history
        // TODO: Consider previous mistake session tag
    }
}