const actionTypes = {
	ADD_PERCENTAGE: 'ADD_PERCENTAGE',
	ADD_SCORE: 'ADD_SCORE'
}

export const addPercentage = percentage => ({ 
	type: actionTypes.ADD_PERCENTAGE,
	payload: { percentage }
})

export const addScore = score => ({ 
	type: actionTypes.ADD_SCORE,
	payload: { score }
})

const initialState = {
	percentage: 10,
	currentScore: 1,
}

export default function reducer(state = initialState, action) {
	if(action.type === actionTypes.ADD_PERCENTAGE)
		return {
			...state,
			percentage: state.percentage + action.payload.percentage
		}
	if(action.type === actionTypes.ADD_SCORE)
		return {
			...state,
			currentScore: state.currentScore + action.payload.score
		}
	return state;
}