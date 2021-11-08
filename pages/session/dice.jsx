import React from 'react';
import CountUp from 'react-countup';

const Dice = ({ randomAtom, isRolled, handleClick, inputValue, handleInputChange }) => {
    return <div className="dice-content">
                <h1 className="question text-center m-6">{isRolled ? "Guess the element" : "Roll the dice"}</h1>
                {!isRolled && <div className="dice" onClick={handleClick}>
                    <div className="dice-dot"/>
                    <div className="dice-dot"/>
                    <div className="dice-dot"/>
                    <div className="dice-dot"/>
                </div>}
                {isRolled &&
                    <div className="dice dice-rolled">
                    <CountUp start={0} end={randomAtom} delay={0} duration={2}>
                      {({ countUpRef }) => (
                          <h1 ref={countUpRef}>{''}</h1>
                      )}
                    </CountUp>
                </div>}
                {isRolled && <input type="text" className="dice-textbox" value={inputValue} onChange={handleInputChange}/>}
        </div>
}

export default Dice;