import React, { useState, useEffect } from 'react';
import { LearningCard } from "../../components";
import { useSelector } from 'react-redux';
import Validators from './validators';
import Generators from './generators';

const Learn = props => {
    const element = useSelector(state => state.lesson.currentElement)
    const [currentOption, setCurrentOption] = useState();
    const [cards, setCards] = useState();
    useEffect(() => {
        if(element?.number) {
            setCards(Generators.learningCards(element.number))
            setCurrentOption(null);
        }
    }, [element, setCards]);
    var buttonClasses = "check-button btn-primary"
    buttonClasses += !currentOption ? "-disabled" : ""
	if(!element) return null;
	return <div className="session-content">
            <h1 className="question">Which element’s atomic number is {element.number}?</h1>
            <div className="learning-cards-wrapper">
                <div className="learning-cards">
                    {cards?.map(el => <LearningCard
                        key={el.number}
                        name={el.name}
                        number={el.number}
                        symbol={el.symbol}
                        size="large"
                        currentOption={currentOption}
                        handleOnClick={option => setCurrentOption(option)}
                    />)}
                </div>
            </div>
            <div className="session__bottom"><button className={buttonClasses} onClick={() => Validators.learn(currentOption)}>Check</button></div>
        </div>
}

export default Learn;