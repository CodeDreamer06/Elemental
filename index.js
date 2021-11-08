import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import ThemeProvider from './providers/themeProvider';
import HistoryProvider from './providers/historyProvider';
import reportWebVitals from './reportWebVitals';
import store from './services/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
  	<Provider store={store}>
	  	<ThemeProvider>
	  		<HistoryProvider>
		  		<Router>
		    		<App />
		    	</Router>
		    </HistoryProvider>
		</ThemeProvider>
	</Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
