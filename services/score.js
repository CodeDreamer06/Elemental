const actionTypes = {
	CHANGE_PERCENTAGE: 'CHANGE_PERCENTAGE'
}

export const changePercentage = percentage => ({ 
	type: actionTypes.CHANGE_PERCENTAGE,
	payload: { percentage }
})

const initialState = {
	percentage: 10,
}

export default function reducer(state = initialState, action) {
	if(action.type === actionTypes.CHANGE_PERCENTAGE)
		return {
			...state,
			...action.payload
		}
	return state;
}