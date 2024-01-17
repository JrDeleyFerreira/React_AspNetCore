import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootswatch/dist/cosmo/boostrap.min.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Menu from "./components/Menu";
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <React.StrictMode>
	//<App />
	//</React.StrictMode >

	<Router>
		<Menu />
		<div className='container'>
			<App />
		</div>
	</Router>
);