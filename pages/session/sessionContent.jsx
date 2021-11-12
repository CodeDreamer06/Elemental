import React from 'react';
import {
    Learn,
    // Mcq,
    // Memory,
    // Match,
    // Dice,
    // Pronounce
} from "./";
// import lessonTypes from './lessonTypes';
import pageTypes from './pageTypes';
import { useSelector } from 'react-redux';

const SessionContent = props => {
	const pageType = useSelector(state => state.pageType)
    switch(pageType) {
        case pageTypes.learn:
            return <Learn/>
        default:
            return <h1>404</h1>
    }
}

export default SessionContent;


    //     switch(pageType) {
    //         case pageTypes.learn:
    //             return <Learn element={this.state.currentElement} cards={this.state.currentLearningCards} currentOption={this.state.currentLearningOption} handleOnClick={currentLearningOption => { this.setState({ currentLearningOption }) }}/>
    //         case pageTypes.mcq:
    //             return <Mcq element={this.state.currentQuestion} optionsData={this.state.options} currentOption={this.state.currentOption} handleOption={currentOption => this.setState({ currentOption })}/>
    //         case pageTypes.dice:
    //             return <Dice randomAtom={this.randomAtom} isRolled={this.state.diceRolled} handleClick={() => this.setState({ diceRolled: true })} inputValue={this.state.diceInput} handleInputChange={({ target }) => this.setState({ diceInput: target.value })}/>
    //         case pageTypes.match:
    //             return <Match items1={this.state.sortItems1} items2={this.state.sortItems2} selectedMatches={this.state.selectedMatches} handleOnClickNumbers={el => this.setSelectedMatch(el)} handleOnClickNames={el => this.setSelectedMatch(el)}/>
    //         case pageTypes.sort:
    //             return <Sorting items={this.state.sortItems} handleOnChange={newItems => { this.setState({ sortItems: newItems }) }}/>
    //         case pageTypes.pronounce:
    //             return <Pronounce/>
    //         case pageTypes.summary:
    //             return <Summary items={this.history} score={this.state.score} finalScore={Number(localStorage.getItem('ElDi')) + this.state.score} correctAnswers={this.state.correctAnswers} wrongAnswers={this.state.wrongAnswers} showReview={() => this.setState({ showReview: true })}/>
    //         case pageTypes.memory:
    //             return <Memory/>
    //         default:
    //             return <h1>404</h1>
    //     }
    // }