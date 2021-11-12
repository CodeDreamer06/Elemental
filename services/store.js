import { createStore, combineReducers } from 'redux';
import { theme, lessonType, pageType, modal, score, lesson } from './';

const combinedReducers = combineReducers({
	theme,
	lessonType,
	pageType,
	modal,
	score,
	lesson
})

const store = createStore(
	combinedReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;