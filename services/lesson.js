import elements from '../Elements';
import Generators from '../pages/session/generators';
import pageTypes from '../pages/session/pageTypes'

const actionTypes = {
	TO_LEARN: 'TO_LEARN',
	ADD_TAUGHT: 'ADD_TAUGHT',
	REMOVE_TAUGHT: 'REMOVE_TAUGHT',
	ADD_LEARNT: 'ADD_LEARNT',
	NEXT_ELEMENT: 'NEXT_ELEMENT',
}

export const addToLearn = () => {
	var learnt = JSON.parse(localStorage.getItem("Numlearnt"));
	var learntCount = 0;
	try { learntCount = learnt.length }
	catch (e) { localStorage.setItem("Numlearnt", JSON.stringify([])) }
	if(!learntCount) learntCount = 0;
	if(learnt === 0) learnt = []
	const toLearn = elements.slice(learntCount, learntCount+5)
	const currentElement = toLearn[0] || 1;
	return {
		type: actionTypes.TO_LEARN,
		payload: { 
			toLearn,
			currentElement,
			learningCards: Generators.learningCards(currentElement.number)
		}
	}
}

export const addTaught = id => {
	return {
		type: actionTypes.ADD_TAUGHT,
		payload: id
	}
}

export const removeTaught = () => {
	return {
		type: actionTypes.REMOVE_TAUGHT,
		payload: { }
	}
}

export const addLearnt = id => {
	return {
		type: actionTypes.ADD_LEARNT,
		payload: id
	}
}

export const nextElement = () => ({
	type: actionTypes.NEXT_ELEMENT,
	payload: {}
})

const initialState = {
	toLearn: [],
	currentElement: { name: null, number: null },
	learningCards: [],
	taught: [],
	learnt: [],
	pageCount: 0,
	pageType: pageTypes.learn
}

export default function reducer(state = initialState, action) {
	if(action.type === actionTypes.TO_LEARN)
		return {
			...state,
			...action.payload
		}
	if(action.type === actionTypes.ADD_TAUGHT)
		return {
			...state,
			taught: [...state.taught, action.payload]
		}
	if(action.type === actionTypes.REMOVE_TAUGHT)
		return {
			...state,
			taught: state.taught.slice(1)
		}		
	if(action.type === actionTypes.NEXT_ELEMENT){
		var pageType = pageTypes.learn
		if(state.pageCount % 2) pageType = pageTypes.learn
		else pageType = pageTypes.mcq
		return {
			...state,
			pageType,
			currentElement: pageType === pageTypes.learn ? state.toLearn[state.currentElement.number] : state.currentElement,
			pageCount: state.pageCount + 1
		}
	}
	if(action.type === actionTypes.ADD_LEARNT)
		return {
			...state,
			learnt: [...state.learnt, action.payload]
		}
	return state;
}