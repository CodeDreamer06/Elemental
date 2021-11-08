import React from 'react';

const Options = ({ data, handleOption, current }) => {
    return <div className="options">
        {data && data.map(option => <Option size="large" key={option} value={option} handleOption={handleOption} current={current}/>)}
    </div>
}

const Option = ({ size, value, handleOption, current }) => {
    var largeOption = {
        "fontSize": "6rem", 
        "padding": "1rem 4rem"
    }

    const smallOption = {
        "fontSize" : "4rem", 
        "padding": "1rem"
    }

    return ( 
        <button 
            className={`option ${value === current ? " selected" : ""}`}
            onClick={() => handleOption(value)}
            style={size === "large" ? largeOption : smallOption}>
            {value}
        </button>
    );
}
 
export default Options;