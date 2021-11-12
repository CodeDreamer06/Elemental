const actionTypes = {
	SET_THEME: 'SET_THEME',
	SWITCH_THEME: 'SWITCH_THEME'
}

export const setTheme = themeType => ({
	type: actionTypes.SET_THEME,
	payload: themeType
})

export const switchTheme = () => ({
	type: actionTypes.SWITCH_THEME
})

export const themes = {
	light: "light",
	dark: "dark"
}

const initialState = localStorage.getItem('ElTheme')

export default function reducer(state = initialState, action) {
	if(action.type === actionTypes.SET_THEME) {
		localStorage.setItem('ElTheme', action.payload)
		return action.payload
	}

	if(action.type === actionTypes.SWITCH_THEME){
		const newTheme = state === themes.dark ? themes.light : themes.dark
		localStorage.setItem('ElTheme', newTheme)
		return newTheme
	}
	return state;
}