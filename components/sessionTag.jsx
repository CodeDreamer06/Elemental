import React from 'react';
import HeartBroken from '../assets/icons/heart_broken.png';

const SessionTag = ({ isMistake, isRevision }) => {
  if(!isMistake) return null;
  return (
    <div className="question-tag">
        {isRevision && <>
          <img src={HeartBroken} className="previous-mistake" alt="heart broken"/>
          <p>Revise</p>
        </>}      
        {isMistake && <>
        	<img src={HeartBroken} className="previous-mistake" alt="heart broken"/>
        	<p>Previous Mistake</p>
        </>}
    </div>
  )
}

export default SessionTag;