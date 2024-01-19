import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootswatch/dist/cosmo/bootstrap.min.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Menu from "./components/Menu.tsx";
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.tsx';

ReactDOM.render(
    <Router>
        <Menu />
        <div className='container'>
            <App />
        </div>
    </Router>,
    document.getElementById('root')
);
