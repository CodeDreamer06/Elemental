import pageTypes from '../pages/session/pageTypes'

const actionTypes = {
	SET_PAGE: 'SET_PAGE'
}

export const setPageType = pageType => ({
	type: actionTypes.SET_PAGE,
	payload: pageType
})

export default function reducer(state = pageTypes.learn, action) {
	if(action.type === actionTypes.SET_PAGE)
		return action.payload
	return state;
}