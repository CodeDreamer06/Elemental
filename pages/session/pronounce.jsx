import React from 'react';
import Microphone from '../../assets/icons/microphone.png';

const Pronounce = props => {
	return <div className="pronounce">
	            <h1 className="text-center">Say "helium"</h1>
	            <div className="pronounce-content">
	                <div className="pronounce__bubble">
	                    <img src={Microphone} alt="microphone"/>
	                    <p>Tap to speak</p>
	                </div>
	            </div>
	        </div>
}

export default Pronounce;