import './App.css';
import React, { Component } from 'react';
import MyProvider from './contexts/MyProvider';
import Login from './components/LoginComponent';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import MyContext from './contexts/MyContext';

class App extends Component {
  static contextType = MyContext.Provider; // Truy cập vào context toàn cục

  render() {
    return (
      <MyProvider>
          <Login/>
        <BrowserRouter>
          <Main/>
        </BrowserRouter>
      </MyProvider>
    );
  }
}

export default App;
