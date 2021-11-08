import { createStore, combineReducers } from 'redux';
import reducer from './lessonType';
import { lessonType } from './';

const allReducers = combineReducers({
	lessonType
})

const store = createStore(
	allReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;