import React from 'react';
import { useHistory } from 'react-router-dom';
import NotFoundImg from '../assets/images/pageNotFound.png';

const PageNotFound = props => {
	const history = useHistory();
	return (
    	<header className="page-not-found">
            <img
                src={NotFoundImg}
                alt="404 Error"/>
            <div className="page-not-found__text">
                <h1>Page Not Found</h1>
                <p>Sorry, we can't find the page you're looking for.</p>
                <button
                    className="btn-primary"
                    onClick={() => history.push('/')}>Go to home</button>
            </div>
        </header>
	)
}

export default PageNotFound;