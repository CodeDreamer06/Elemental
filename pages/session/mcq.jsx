import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Options from '../../components/options';
import lessonTypes from './lessonTypes';
import Validators from './validators';
import Generators from './generators';

const Mcq = props => {
    const element = useSelector(state => state.lesson.currentElement)
    // let history = useHistory();
    const [currentOption, setCurrentOption] = useState();
    const [options, setOptions] = useState();
    useEffect(() => {
        if(element?.number) {
            setOptions(Generators.numericalOptions(element.number))
            setCurrentOption(null);
        }
    }, [element, setOptions]);
    if(!element) return null;
    // const question = history.location === '/lesson/' + lessonTypes.atomicNames ? `What is the atomic number of ${element.name}?` : `Which element's atomic number is ${element.number}?`;
    const question = `What is the atomic number of ${element.name}?`
    var buttonClasses = "check-button btn-primary"
    buttonClasses += !currentOption ? "-disabled" : ""
    return <div className="session-content session-mcq">
        <h1 className="question">{question}</h1>
        <div className="session-options">
            <div className="learning-cards">
                <Options 
                	data={options}
                	current={currentOption}
                	handleOption={option => setCurrentOption(option)}/>
            </div>
        </div>
        <div className="session__bottom"><button className={buttonClasses} onClick={() => Validators.mcq(currentOption)}>Check</button></div>
    </div>
}

export default Mcq;