import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SessionContent from './sessionContent';
import { TopBar, BottomModal } from "../../components";
import { addToLearn } from '../../services/lesson';

const Session = props => {
	const dispatch = useDispatch();
	const theme = useSelector(state => state.theme)
	useEffect(() => {
		dispatch(addToLearn())
	}, [dispatch]);
    return <div className="session" theme={theme+"-mode"}>
        <TopBar/>
        <SessionContent/>
        <BottomModal/>
    </div>
}

export default Session;

// import React, { Component } from 'react';
// import { GlobalHotKeys } from 'react-hotkeys';
// import elements from '../../Elements';
// import lessonTypes from './lessonTypes';
// import { setLessonType } from '../../services/lessonType';
// import { 
//     TopBar,
//     BottomModal,
//     Sorting,
//     Review,
//     Summary,
//     SessionTag
//     } from "../../components";
// import {
//     Learn,
//     Mcq,
//     Memory,
//     Match,
//     Dice,
//     Pronounce
// } from "./";
// import Utilities from "../../utilities";
// import Generators from "./generators";
// import Validators from "./validators";
// 
// const keyMap = {
//     ENTER: "enter"
// }
// 
// export default class Session extends Component {
// 	constructor(props) {
// 		super(props);
//         this.setupStorage()
// 		this.revisionCount = 0;
//         this.learningDone = false
//         this.disableProbability = false
//         this.history = []
//         this.taught = []
//         this.revised = []
//         this.mistakePageCount = 0
//         this.sessionMistakes = []
//         this.sortProbability = 10
//         this.matchingProbability = 8
//         this.diceProbability = 3
// 		this.state = {
//             score: 1,
//             correctAnswers: 0,
//             wrongAnswers: 0,
// 			percentage: 10,
//             pageCount: 0,
//             showTopBar: true,
//             pageTypes : {
//                 learn: "basic-learning-page",
//                 mcq: "mcq-page",
//                 dice: "dice-page",
//                 match: "match-cards",
//                 sort: "sorting-atoms",
//                 pronounce: "pronounce-atoms",
//                 memory: "memorization-technique",
//                 summary: "summary"
//             },
//             pageType: "basic-learning-page",
//             nextSlide: {},
//             saveSlide: false,
//             toLearn: [],
//             currentElement: {
//                 name: 'Element',
//                 number: 1
//             },
//             currentQuestion: {
//                 name: 'Element',
//                 number: 1
//             },
//             sortItems1: [],
//             sortItems2: [],
//             sortItems: [],
//             sortedItems: [],
//             selectedMatches: { 0: null, 1: null },
//             currentOption: null,
//             currentLearningOption: null,
//             currentLearningCards: [],
//             subSessionQuestions: 0,
//             diceInput: '',
//             modalData: {
//                 showModal: false,
//                 type: "basic-learning-page",
//                 text: '',
//             },
//             previousMistake: false,
//             revising: false,
//             diceRolled: false,
//             showReview: false,
// 		}
// 	}
// 
// 	componentDidMount() {
// 	    this.findElementsToLearn();
//     }
// 
//     setupStorage = () => {
//         if(!localStorage.getItem("Numlearnt")) localStorage.setItem("Numlearnt", [0])
//     }
// 
//     handlers = {
//         ENTER: event => this.setState(state => {
//             const { pageType, pageTypes } = this.state;
//             if(this.state.modalData.showModal) this.handleContinue()
//             else if(pageType === pageTypes.learn && this.state.currentLearningOption) this.handleCheck()
//             else if(pageType === pageTypes.mcq && this.state.currentOption) this.handleCheck()
//             else if(pageType === pageTypes.dice && this.state.diceInput) this.handleCheck()
//         })
//     };
// 
//     handleOption = currentOption => { this.setState({ currentOption }) }
// 
//     randomElement = array => array[Math.floor(Math.random() * array.length)]
// 
//     showModal = (showModal, type, text, repeat) => {
//         this.setState({ modalData: { showModal, type, text, repeat }})
//     }
// 
//     handleCheck = () => {
//         const { pageType, pageTypes, currentElement, currentLearningOption, currentQuestion, currentOption } = this.state;
//         if(pageType === pageTypes.mcq) Validators.mcq(pageTypes, currentQuestion, currentOption, this.isCorrect, isCorrect => this.isCorrect = isCorrect, state => this.setState(state), sessionMistake => this.sessionMistakes.push(sessionMistake), this.score, this.state.correctAnswers, this.state.wrongAnswers, this.state.percentage, this.state.previousMistake, historyItem => this.history.push(historyItem));
//         else if(pageType === pageTypes.learn) Validators.learn(pageTypes, currentElement, currentLearningOption, isCorrect => this.isCorrect = isCorrect, this.taught, number => this.taught.push(number), state => this.setState(state));
//         else if(pageType === pageTypes.sort) Validators.sort(this.state.sortItems, this.state.sortedItems, isCorrect => this.isCorrect = isCorrect, this.state.pageTypes.sort, this.showModal)
//         else if(pageType === pageTypes.dice) Validators.dice(this.randomAtom, this.state.diceInput, pageTypes, isCorrect => this.isCorrect = isCorrect, state => this.setState(state));
//         else if(pageType === pageTypes.memory) if(this.state.saveSlide) this.setState(this.state.nextSlide);
//     }
// 
//     ifNoElementsToLearn = () => this.state.toLearn[this.state.pageCount];
// 
//     reviseQuestions = () => {
//     	this.learningDone = true;
//     	if(this.revisionCount <= 3) {
//     		this.revisionCount += 1;
// 	    	const learntAtoms = JSON.parse(localStorage.getItem("Numlearnt"));
// 	    	var randomAtom = this.randomElement(learntAtoms);
// 	    	while(this.revised.includes(randomAtom)) Generators.randomElement(learntAtoms);
// 	        this.revised.push(randomAtom);
// 			const currentQuestion = elements.find(el => el.number === randomAtom)	  
//             console.log("revising")
// 	        this.setState({
// 	            pageType: this.state.pageTypes.mcq,
// 	            options: Generators.numericalOptions(currentQuestion),
// 	            modalData: {
// 	                showModal: false,
// 	                type: this.state.pageTypes.mcq,
// 	                text: ''
// 	            },
// 	            previousMistake: false,
// 	            revising: true,
// 	            currentLearningOption: null,
// 	            currentLearningCards: [],
// 	            currentQuestion
// 	        })
//     	}
// 
//     	else this.repeatMistakes();
//     }
// 
//     repeatMistakes = () => {
//         if(!this.sessionMistakes[this.mistakePageCount]){
//             Utilities.saveStreak();
//             this.setState({
//                 previousMistake: false,
//                 pageType: this.state.pageTypes.summary,
//                 showTopBar: false,
//                 percentage: 100,
//                 modalData: {
//                     showModal: false,
//                     type: this.state.pageTypes.mcq,
//                     text: ''
//                 },
//             })
//         }
// 
//         else {
//             this.setState({
//                 options: Generators.numericalOptions(this.sessionMistakes[this.mistakePageCount]),
//                 revising: false,
//                 previousMistake: true,
//                 modalData: {
//                     showModal: false,
//                     type: this.state.pageTypes.learn,
//                     text: ''
//                 },
//                 currentQuestion: this.sessionMistakes[this.mistakePageCount]
//             })
//             this.mistakePageCount += 1;
//         }
//     }
// 
//     randomProbability = nextSlide => {
//         if(JSON.parse(localStorage.getItem("Numlearnt")).length > 5 && !this.disableProbability) {
//             if(Math.floor(Math.random() * this.sortProbability) + 1 === this.sortProbability) {
//                 this.setState({
//                     nextSlide,
//                     saveSlide: true,
//                     modalData: { showModal: false },
//                     pageType: this.state.pageTypes.sort,
//                     sortedItems: Generators.sorting(5),
//                     sortItems: Utilities.randomiseArray(Generators.sorting(5))
//                 });
//             }
// 
//             else if(Math.floor(Math.random() * this.diceProbability) + 1 === this.diceProbability) {
//                 const learntAtoms = JSON.parse(localStorage.getItem("Numlearnt"));
//                 this.randomAtom = learntAtoms[Math.floor(Math.random() * learntAtoms.length)];
//                 this.setState({
//                     nextSlide,
//                     saveSlide: true,
//                     diceRolled: false,
//                     diceInput: "",
//                     modalData: { showModal: false },
//                     pageType: this.state.pageTypes.dice,
//                 });
//             }
// 
// 
//             else if(Math.floor(Math.random() * this.matchingProbability) + 1 === this.matchingProbability) {
//                 this.setState({
//                     nextSlide,
//                     saveSlide: true,
//                     modalData: { showModal: false },
//                     pageType: this.state.pageTypes.match,
//                     sortItems1: Utilities.randomiseArray(Generators.sorting(5)),
//                     sortItems2: Utilities.randomiseArray(Generators.sorting(5)),
//                 });
//             }
// 
//             else {
//                 this.setState(nextSlide)
//             }
//         }
// 
//         else this.setState(nextSlide)
//     }
// 
//     showMemory = nextSlide => {
//         const learnt = JSON.parse(localStorage.getItem("Numlearnt")).length
//         if(learnt > 5 && learnt < 8) {
//             this.setState({
//                 nextSlide,
//                 saveSlide: true,
//                 pageType: this.state.pageTypes.memory,
//                 modalData: {
//                     showModal: false,
//                     type: this.state.pageTypes.mcq,
//                     text: ''
//                 }
//             });
//             return;
//         }        
//     }
// 
//     continueMCQSubSession = () => {
//         if(this.state.subSessionQuestions === 1)
//             return this.askMCQ();
// 
//         else if(this.state.subSessionQuestions === 2) {
//             const currentElement = this.state.currentElement;
//             var currentLearningCards;
//             try {
//                 currentLearningCards = Generators.lessonCards(this.state.toLearn[this.state.pageCount + 1].number)
//             }
//             catch(e) {
//                 this.reviseQuestions()
//                 return;
//             }
// 
//             const nextSlide = {
//                 pageType: this.state.pageTypes.learn,
//                 options: Generators.numericalOptions(currentElement),
//                 saveSlide: false,
//                 modalData: {
//                     showModal: false,
//                     type: this.state.pageTypes.learn,
//                     text: ''
//                 },
//                 previousMistake: false,
//                 subSessionQuestions: 0,
//                 currentLearningOption: null,
//                 currentQuestion: null,
//                 currentLearningCards,
//             }
// 
//             this.setState(nextSlide)
//         }
//     }
// 
//     canShowQuestion = () => { 
//         const learnt = localStorage.getItem("Numlearnt")
//         return this.taught.filter(el => !JSON.parse(learnt).includes(el)).length > 1;
//     }
// 
//     askMCQ = () => {
//         // const currentLessonType = lessonType.get()
//         const currentLessonType = null;
//         const randomNumber = Math.floor(Math.random() * this.taught.length)
//         const randomElement = this.taught[randomNumber]
//         const currentQuestion = elements.find(el => el.number === randomElement)
//         var options;
//         if(currentLessonType === lessonTypes.atomicNumbers)
//             options = Generators.numericalOptions(currentQuestion)
//         else if(currentLessonType === lessonTypes.atomicNames) {
//             options = Generators.alphabeticalOptions(currentQuestion)
//         }
//         const nextSlide = {
//             pageType: this.state.pageTypes.mcq,
//             subSessionQuestions: this.state.subSessionQuestions + 1,
//             modalData: {
//                 showModal: false,
//                 type: this.state.pageTypes.mcq,
//                 text: ''
//             },
//             previousMistake: false,
//             currentLearningOption: null,
//             currentLearningCards: [],
//             options,
//             currentQuestion
//         }
//         this.taught.splice(randomNumber, 1);
//         this.randomProbability(nextSlide);
//     }
// 
//     fetchLessonCards = () => {
//         const currentLearningCards = Generators.lessonCards(this.state.toLearn[this.state.pageCount + 1]?.number)
//         this.setState({
//             modalData: {
//                 showModal: false,
//                 type: this.state.pageTypes.learn,
//                 text: ''
//             },
//             previousMistake: false,
//             pageCount: this.state.pageCount + 1,
//             currentLearningOption: null,
//             currentLearningCards,
//             currentElement: this.state.toLearn[this.state.pageCount + 1]
//         })
//     }
// 
//     repeatPage = () => {
//         this.isCorrect = null;
//         this.showModal(false, this.state.pageTypes.learn, '', false)
//     }
// 
//     handleContinue = () => {
//         if(this.state.saveSlide) {
//             if(this.isCorrect || this.state.modalData.type === this.state.pageTypes.dice) this.setState(this.state.nextSlide)
//             else this.showModal(false)
//         }
// 
//         if(this.state.modalData.repeat) { this.repeatPage(); return; }
//         else {
//             if(JSON.parse(localStorage.getItem("Numlearnt")) !== 0 && this.canShowQuestion()) this.askMCQ();
//             if(this.state.pageType === this.state.pageTypes.mcq) this.continueMCQSubSession();
//             else if(this.state.pageType === this.state.pageTypes.learn) this.fetchLessonCards();
//         }
//     }
// 
//     findElementsToLearn() {
//         const pageCount = this.state.pageCount;
//         var learnt = JSON.parse(localStorage.getItem("Numlearnt"));
//         var learntCount = 0;
//         try { learntCount = learnt.length }
//         catch (e) { localStorage.setItem("Numlearnt", JSON.stringify([])) }
//         if(!learntCount) learntCount = 0;
//         if(learnt === 0) learnt = []
//         var toLearn = elements.filter((el, count) => count < learntCount + 5 ? !learnt.includes(el.number) : false);
//         const currentElement = toLearn[pageCount] ? toLearn[pageCount] : 1;
//         this.setState({
//             options: Generators.numericalOptions(currentElement),
//             toLearn,
//             currentElement,
//             currentLearningCards: Generators.lessonCards(currentElement.number),
//         });
//     }
// 
//     setSelectedMatch = value => {
//         const { selectedMatches, sortItems1, sortItems2, sortItems } = this.state
//         var newMatches = { ...selectedMatches }
//         newMatches[Number.isInteger(value) ? 0 : 1] = value
//         this.setState({ selectedMatches: newMatches })
//         if(newMatches[0] && newMatches[1]) {
//             try {
//                 var selectedNumber = JSON.parse(localStorage.getItem("Numlearnt")).find(number => number === newMatches[0]);
//                 var selectedWordToNumber = elements.find(el => el.name === newMatches[1]).number;
//             }
//             catch(TypeError) { }
//             if(selectedNumber === selectedWordToNumber) { 
//                 var modalData = { ...this.state.modalData }
//                 modalData.showModal = sortItems.length <= 1;
//                 const filteredItems1 = sortItems1.filter(atom => atom.number !== selectedNumber)
//                 const filteredItems2 = sortItems2.filter(atom => atom.number !== selectedNumber)
//                 this.setState({
//                     sortItems1: filteredItems1,
//                     sortItems2: filteredItems2,
//                     modalData
//                 });
//                 if(!filteredItems1.length && !filteredItems2.length) {
//                     this.isCorrect = true;
//                     this.showModal(true, this.state.pageTypes.match)
//                 }                
//             }
//         }
//     }
// 
//     showCheckButton = () => {
//         const { pageType, pageTypes } = this.state
//         const handler = this.handleCheck;
//         var buttonClasses = "check-button btn-primary"
//         buttonClasses += pageType === pageTypes.learn ? !this.state.currentLearningOption ? "-disabled" : "" : ""
//         buttonClasses += pageType === pageTypes.mcq ? !this.state.currentOption ? "-disabled" : "" : ""
//         switch(pageType) {
//             case pageTypes.learn:
//             case pageTypes.sort:
//             case pageTypes.mcq:
//                 return <button
//                     className={buttonClasses}
//                     onClick={handler}>Check</button>
// 
//             case pageTypes.dice:
//                 if(this.state.diceRolled)
//                     return <button
//                         className={buttonClasses}
//                         onClick={handler}>Check</button>
//                 break;
// 
//             case pageTypes.memory:
//                 return <button
//                     className={buttonClasses}
//                     onClick={handler}>Continue</button>
// 
//             case pageTypes.summary:
//                 return null;
// 
//             default:
//                 return <button
//                     className={buttonClasses}
//                     onClick={handler}>Check</button>
//         }
//     }
// 
//     renderPages() {
//         const { pageType, pageTypes } = this.state
//         switch(pageType) {
//             case pageTypes.learn:
//                 return <Learn element={this.state.currentElement} cards={this.state.currentLearningCards} currentOption={this.state.currentLearningOption} handleOnClick={currentLearningOption => { this.setState({ currentLearningOption }) }}/>
//             case pageTypes.mcq:
//                 return <Mcq element={this.state.currentQuestion} optionsData={this.state.options} currentOption={this.state.currentOption} handleOption={currentOption => this.setState({ currentOption })}/>
//             case pageTypes.dice:
//                 return <Dice randomAtom={this.randomAtom} isRolled={this.state.diceRolled} handleClick={() => this.setState({ diceRolled: true })} inputValue={this.state.diceInput} handleInputChange={({ target }) => this.setState({ diceInput: target.value })}/>
//             case pageTypes.match:
//                 return <Match items1={this.state.sortItems1} items2={this.state.sortItems2} selectedMatches={this.state.selectedMatches} handleOnClickNumbers={el => this.setSelectedMatch(el)} handleOnClickNames={el => this.setSelectedMatch(el)}/>
//             case pageTypes.sort:
//                 return <Sorting items={this.state.sortItems} handleOnChange={newItems => { this.setState({ sortItems: newItems }) }}/>
//             case pageTypes.pronounce:
//                 return <Pronounce/>
//             case pageTypes.summary:
//                 return <Summary items={this.history} score={this.state.score} finalScore={Number(localStorage.getItem('ElDi')) + this.state.score} correctAnswers={this.state.correctAnswers} wrongAnswers={this.state.wrongAnswers} showReview={() => this.setState({ showReview: true })}/>
//             case pageTypes.memory:
//                 return <Memory/>
//             default:
//                 return <h1>404</h1>
//         }
//     }
// 
// 	render() {
// 		return (
// 			<div className="session" theme="dark-mode">
// 				<GlobalHotKeys keyMap={keyMap} handlers={this.handlers}/>
//                 {this.state.showTopBar && <TopBar percentage={this.state.percentage}/>}
//                 <SessionTag isMistake={this.state.previousMistake} isRevision={this.state.revising}/>
//                 {this.renderPages()}
//                 {this.state.showReview && <Review handleClose={() => this.setState({ showReview: false }) }/>}
//                 {this.showCheckButton()}
// 				<BottomModal
//                     correct={this.isCorrect} 
//                     data={this.state.modalData}
//                     onBtnClick={this.handleContinue}/>
// 			</div>
// 		);
// 	}
// }