import React from 'react';
import RLDD from 'react-list-drag-and-drop/lib/RLDD';

const SortingContent = ({ items, handleOnChange }) => {
	console.log(items)
	return <div>
	            <h1 className="sorting-header">Sort the atoms</h1>
	            <div className="sortable-content">
	                <div className="sortable-items">
	                    <RLDD
	                      items={items}
	                      itemRenderer={atom => {
	                        return <div className="sort-item">{atom.name}</div>
	                      }}
	                      onChange={handleOnChange}
	                    />
	                </div>
	            </div>
	        </div>
}

export default SortingContent;