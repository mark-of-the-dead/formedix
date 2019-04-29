import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Routes from './components/Routes';
import SearchForm from './components/SearchForm';
import './css/style.css';



render(<Routes />, document.querySelector('#main'));