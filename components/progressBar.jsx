import React from 'react';

const ProgressBar = ({ percentage, color }) => {
    return ( 
        <div className="progress-bar">
            <div
                className={"progress-bar-filled dashboard-"+color}
                style={{ width: percentage }}>
                <div className="progress-bar-accent"/>
            </div>
        </div>
    );
}
 
export default ProgressBar;