import React from 'react';
import TickIcon from '../assets/icons/tick.svg';
import WrongIcon from '../assets/icons/wrong.svg';

const BottomModal = ({ correct, data, onBtnClick }) => {
    if (data.showModal) {
        return <div className={!correct ? "bottom-modal__wrong" : "bottom-modal"}>
                <div className="bottom-modal-text">
                    <img src={correct ? TickIcon : WrongIcon} alt="tick" />
                    <div className="bottom-modal__reaction-text">
                        <h1>{correct ? "Correct!" : "Incorrect"}</h1>
                        {!correct && <h2>{data.text}</h2>}
                    </div>
                </div>
                <div className="bottom-modal-right">
                    <button className="btn-primary" onClick={onBtnClick}>
                        {correct ? "Continue" : "Got it"}</button>
                </div>
        </div>
    }
    else return null;
}

export default BottomModal;