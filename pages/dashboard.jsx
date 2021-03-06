import React from 'react';
import Navbar from '../components/navbar';
import Banner from '../components/banner';
import LessonCard from '../components/lessonCard';
import DiamondIcon from '../assets/icons/diamond.svg';
import { useSelector } from 'react-redux';

const cardValues = [
    {
        heading: 'Atomic Numbers',
        localName: 'AtomicNumbers',
        background: 'linear-gradient(180deg, #843AFC 0%, rgba(132, 58, 252, 0.9) 100%)',
        progressColor: 'violet'
    },

    {
        heading: 'Element Names',
        localName: 'ElementNames',
        background: 'linear-gradient(180deg, #F35479 0%, rgba(243, 84, 121, 0.9) 100%)',
        progressColor: 'red'
    },

    {
        heading: 'Atomic Symbols',
        localName: 'AtomicSymbols',
        background: 'linear-gradient(180deg, #30D992 0%, rgba(48, 217, 146, 0.8) 100%)',
        progressColor: 'green'
    },

    {
        heading: 'Atomic Mass',
        localName: 'AtomicMass',
        background: 'linear-gradient(180deg, #FD8451 0%, rgba(253, 132, 81, 0.8) 100%)',
        progressColor: 'orange'
    },
]

const Dashboard = props => {
  const theme = useSelector(state => state.theme)
  return (
    <div theme={theme+"-mode"}>
    	<Navbar/>
    	<div className="home">
    		<div className="main-content">
    			<Banner heading="Daily Challenge" btnText="+10" btnImg={DiamondIcon}/>
                 	<div className="lesson-cards">
                        {cardValues.map(cardData =>
                     		<LessonCard 
                                key={cardData.heading}
                                data={cardData}/>
                        )}
                    </div>    			
    		</div>
    		<div className="dynamic-content">
    		</div>
    	</div>
    </div>
  )
}

export default Dashboard;