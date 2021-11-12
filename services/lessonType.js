import lessonTypes from '../pages/session/lessonTypes'

const actionTypes = {
	SET_LESSON: 'SET_LESSON'
}

export const setLessonType = lessonType => ({
	type: actionTypes.SET_LESSON,
	payload: lessonType
})

export default function reducer(state = lessonTypes.atomicNumbers, action) {
	if(action.type === actionTypes.SET_LESSON)
		return action.payload
	return state;
}