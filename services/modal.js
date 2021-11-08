const actionTypes = {
	CHANGE_MODAL: 'CHANGE_MODAL'
}

export const changeModal = modalData => ({ 
	type: actionTypes.CHANGE_MODAL,
	payload: modalData
})

const initialState = {
    showModal: false,
    type: 'basic-learning-page',
    text: '',
    repeat: false
}

export default function reducer(state = initialState, action) {
	if(action.type === actionTypes.CHANGE_MODAL)
		return {
			...state,
			...action.payload
		}
	return state;
}