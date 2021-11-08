import React from 'react';
import { useHistory } from "react-router-dom";
import ProgressBar from "./progressBar";

const LessonCard = ({ data }) => {
    const history = useHistory();
    const { heading, localName, background, progressColor } = data;
    const score = localStorage.getItem(localName) || localStorage.setItem(localName, 0);

    function handleClick(type) {
        history.push('/lesson/'+type);
    }

    return (
        <div 
            className="lesson-card" 
            style={{ background }} 
            onClick={() => handleClick(localName)}>
                
            <div className="lesson-card__body">
                <h3>{heading}</h3>
                <h2>{score}</h2>
            </div>
            <ProgressBar
                color={progressColor} 
                percentage={(score / 118) * 100 + "%"}/>
        </div>
    );
}

export default LessonCard;