import React from 'react';

const Review = ({ items, handleClose }) => {
	// TODO: Fix handleClose
  return <div className="modal-overlay">
  		 <button className="modal__close-button" onClick={() => console.log('Close button clicked!')}>X</button>
  		 <div className="modal__scrollable-content">
  		 	<h1>Let's review:</h1>
	         <div className="review-cards">
	         	{items?.map(
	         		review => {
	         			var reviewCardClasses = "review-card review-card"
	         			reviewCardClasses += review.correctAnswer === review.userAnswer ? "--correct" : "--wrong"
	         			return <div className={reviewCardClasses} key={review.id}>
         						<p>{review.question}</p>
         						<p>Your answer: {review.userAnswer}</p>
         					</div>
         				})}
	        </div>
	      </div>
    </div>
}

export default Review;