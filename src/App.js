import React, { Component } from 'react';
import './css/app.min.css';
import './css/navbar.min.css';
import MyNavbar from './components/Navbar';
import Register from './components/Register';
import SignIn from './components/SignIn'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="mynavbar">
          <MyNavbar/>
        </div>
        <div id="signin">
          <SignIn/>
        </div>
      </div>
    );
  }
}

export default App;
