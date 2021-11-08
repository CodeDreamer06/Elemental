import React from 'react';

const learnt = JSON.parse(localStorage.getItem("Numlearnt"))?.length

const data = {
	10: {
		description: "Remember the first 10 elements using this Mnemonic",
		content: <><span>H</span>arry <span>H</span>elps <span>L</span>ittle <span>B</span>etty <span>B</span>rown <span>C</span>rack <span>N</span>uts <span>O</span>n <span>F</span>riday <span>N</span>ights</>
	}
}

const Memory = props => {
  if(learnt > 5 && learnt < 8)
  return <div className="memory-content">
	    	<h1>Here's a tip:</h1>
	    	<h2>{data[10].description}</h2>
	    	<p>{data[10].content}</p>
	     </div>
  else return null;
}

export default Memory;