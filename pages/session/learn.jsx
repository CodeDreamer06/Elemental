import React from 'react';
import { LearningCard } from "../../components";

const Learn = ({ element, cards, currentOption, handleOnClick }) => {
	if(!element) return null;
	return <div className="session-content">
            <h1 className="question">Which element’s atomic number is {element.number}?</h1>
            <div>
                <div className="learning-cards">
                    {cards?.map(el => <LearningCard
                        key={el.number}
                        name={el.name}
                        number={el.number}
                        symbol={el.symbol}
                        size="large"
                        currentOption={currentOption}
                        handleOnClick={handleOnClick}
                    />)}
                </div>
            </div>
        </div>
}

export default Learn;