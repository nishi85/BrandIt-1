import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link } from 'react-router-dom';
import axios from 'axios';


class App extends React.Component {

    render() {
      return (
        <div>
          <img src="./dev/images/brandit-logo.svg" alt=""/>
         <h2>Brandit</h2>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta tenetur necessitatibus, explicabo doloremque ab eos dolorem id velit obcaecati optio saepe reprehenderit facere provident nisi quos alias harum illum distinctio?</p>
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
