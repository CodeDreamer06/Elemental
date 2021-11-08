import React from 'react';
import { useHistory } from 'react-router-dom';
import Options from '../../components/options';
import lessonTypes from './lessonTypes';

const Mcq = ({ element, optionsData, currentOption, handleOption }) => {
    let history = useHistory();
    const question = history.location === '/lesson/' + lessonTypes.atomicNames ? `What is the atomic number of ${element.name}?` : `Which element's atomic number is ${element.number}?`;
    if(!element) return null;
    return <div className="session-content session-mcq">
        <h1 className="question">{question}</h1>
        <div className="session-options">
            <div className="learning-cards">
                <Options 
                	data={optionsData}
                	current={currentOption}
                	handleOption={handleOption}/>
            </div>
        </div>
    </div>
}

export default Mcq;