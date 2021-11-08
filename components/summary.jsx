import React, { useState } from 'react';
import { useHistory } from "react-router-dom"
import DiamondIcon from '../assets/icons/diamond.svg';
import StreakIcon from '../assets/icons/streak.svg';

const streakScore = localStorage.getItem('ElSt');

const Summmary = ({ finalScore, score, correctAnswers, wrongAnswers, showReview }) => {
  let history = useHistory();
  const [continueCount, setContinueCount] = useState(0);
  const [done, setDone] = useState(false);
  const [openReview, setOpenReview] = useState(false);
  if(!done && continueCount >= 2) {
    setDone(true);
    localStorage.setItem('ElDi', finalScore)
    localStorage.setItem('AtomicNumbers', JSON.parse(localStorage.getItem("Numlearnt")).length)
    history.replace("/");
  }
  return <div className={`endscreen ${openReview ? " endscreen--blur" : ""}`}>
  	<div className="flex-end endscreen-score">
  		{continueCount === 1 && <><img src={StreakIcon} alt="streak"/><h3>{streakScore}</h3></>}
  		<img src={DiamondIcon} alt="diamond"/><h3>{finalScore}</h3>
  	</div>
  	<div className="text-center endscreen-content">
  		{continueCount === 1 ? 
  			<>
			<img src={StreakIcon} alt="streak" className="m-2" style={{ width: 350 }}/>
			<h1>{streakScore} days streak!</h1>
  			<h2>It’s a good habit to learn everyday!</h2>
  			</>
  			: <><h1>You earned {score}XP!!</h1>
  				<h2>Accuracy <span style={{ color: '#FFBB37' }}>{Math.floor((correctAnswers / (correctAnswers + wrongAnswers)) * 100)}%</span></h2></>}
  	</div>
    <div className="flex-space-between">
      <button className="review-btn check-button btn-outline-primary" onClick={() => { showReview(); setOpenReview(true); }}>Review</button>
    	<button className="summary-btn check-button btn-primary" onClick={() => setContinueCount(continueCount + 1)}>Continue</button>
    </div>
  </div>
}

export default Summmary;