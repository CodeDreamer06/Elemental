import store from '../../services/store';
import { changeModal } from '../../services/modal';
import { nextElement, removeTaught } from '../../services/lesson';
import pageTypes from './pageTypes';

export default function handleContinue() {
	const db = store.getState();
 	if(db.lesson.pageType === pageTypes.learn || db.lesson.pageType === pageTypes.mcq) {
		store.dispatch(changeModal({ showModal: false, isCorrect: null }))
		if(db.modal.repeat) return;
		if(db.lesson.pageType === pageTypes.mcq) store.dispatch(removeTaught())
		store.dispatch(nextElement())
	}
}