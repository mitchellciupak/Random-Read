import React from 'react';
import logo from './logo.svg';
import './App.css';

const auth_token = process.env.REACT_APP_AUTH_TOKEN;
const secret_auth_token = process.env.REACT_APP_SECRET_AUTH_TOKEN;

var request = require('request-promise');
require('dotnev'),config();

let options = {
  method: 'GET',
  uri: 'https://www.goodreads.com/review/list/${process.env.USER_ID}.xml`,
  qs: {
      key: process.env.REACT_APP_AUTH_TOKEN,
      v: process.env.VERSION,
      shelf: process.env.SHELF,
      per_page: process.env.PER_PAGE
  }
}

request(options).then((shelf) => {
    console.log(shelf);
}).catch(err => console.error(err));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
