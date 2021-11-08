import React from 'react';

const Banner = ({ heading, description, btnText, btnImg }) => {
    return (
        <div className="banner">
            <h2 className="banner__heading">{heading}</h2>
            <p className="banner__description">{description}</p>
            <button 
                className="btn-outline-primary">
                <img src={btnImg} alt="banner"/>
                <p>{btnText}</p>
            </button>
        </div>
    );
}
 
export default Banner;