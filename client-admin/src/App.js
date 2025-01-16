import axios from 'axios';
import React, { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      message: 'Loading...'
    };
  }

  render() {
    return(
      <div>
        <h2>Admin page</h2>
        <p>{this.state.message}</p>
      </div>
    );
  }

  componetDidMount(){
    axios.get('/hello').then((res) => {
      const result = res.data;
      this.setState = ({message: result.message});
    });
  }
}

export default App;