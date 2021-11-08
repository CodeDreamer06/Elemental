import React from 'react';

const LearningCard = ({ symbol, number, name, size, currentOption, handleOnClick }) => {
    var height = "30rem"

    switch(size){
        case "medium" : height = "20rem"
        break
        case "small" : height = "15rem"
        break
        default : height = "25rem"
    }

    var learningCardClasses = "learning-card";
    learningCardClasses += number === currentOption ? ' learning-card-selected' : ''

    return ( 
        <div className={learningCardClasses} style={{ height }} onClick={() =>  handleOnClick(number)}>
            <div className="learning-card__text">
                <div className="learning-card__top">
                    <h2>{symbol}</h2>
                    <h2>{number}</h2>
                </div>
                <div className="learning-card__bottom">
                    <h1 className="learning-card__name">{name}</h1>
                </div>
            </div>
        </div>
    );
}
 
export default LearningCard;