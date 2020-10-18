import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render( <App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// var mysql = require('mysql');
// var conn = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"rootpassword",
//     database:"cse316"
// });
// conn.connect(function(err){
//     if(err) throw err;
//     console.log("DB connected.");
//     let searchQ = document.getElementById("searchQuery").value;
//     let searchField = document.getElementById("searchField").value;
//     console.log(searchQ);
//     console.log(searchField);
//     // let query = "INSERT "
// });


