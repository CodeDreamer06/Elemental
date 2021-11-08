import React from 'react';

const Match = ({ items1, items2, handleOnClickNumbers, handleOnClickNames, selectedMatches }) => {
	return <div className="matching">
	            <h1 className="matching__heading">Select the correct pair</h1>
	            <div className="matching__content">
	                <div className="matching__grid">
	                    <span className="matching__numbers">
	                        {items1.map(
	                            atom => <div 
	                            	key={atom.number}
	                                onClick={() => handleOnClickNumbers(atom.number)}
	                                className={selectedMatches[0] === atom.number ? "match-selected" : ""}>{atom.number}</div>)}
	                    </span>
	                    <span className="matching__names">
	                        {items2.map(
	                            atom => <div
	                            	key={atom.number}
	                                onClick={() => handleOnClickNames(atom.name)}
	                                className={selectedMatches[1] === atom.name ? "match-selected" : ""}>{atom.name}</div>)}
	                    </span>
	                </div>
	            </div>
	        </div>
}

export default Match;