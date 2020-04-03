import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Favicon from 'react-favicon';


ReactDOM.render(
    <div>
        <App />
        <Favicon url="https://s5.gifyu.com/images/fridge-icon-circle-stroke-06.png" />
    </div>
    , document.getElementById('root'));
