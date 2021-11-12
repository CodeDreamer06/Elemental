import store from '../../services/store';
import { changeModal } from '../../services/modal';
import { nextElement } from '../../services/lesson';
import pageTypes from './pageTypes';

export default function handleContinue() {
	const db = store.getState();
 	if(db.pageType === pageTypes.learn || db.pageType === pageTypes.mcq) {
		store.dispatch(changeModal({ showModal: false, isCorrect: null }))
		if(db.modal.repeat) return;
		store.dispatch(nextElement())
	}
}