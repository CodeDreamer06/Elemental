import React from 'react';
import CloseIcon from '../assets/icons/close.svg';
import ProgressBar from '../components/progressBar';
import { useSelector } from 'react-redux';

const TopBar = (props) => {
  const percentage = useSelector(state => state.score.percentage)
  return (
  	<div className="top-bar">
		<img 
			className="close-icon" 
			src={CloseIcon}
			alt="close"/>
		<ProgressBar percentage={percentage + "%"}/>
     </div>
  )
}

export default TopBar;