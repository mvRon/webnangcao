import React, { Component } from 'react';
import Pic from '../assets/react.svg'

class Home extends Component {
    render() {
        return (
            <div className="align-center">
                <h2 className="text-center">ADMIN HOME</h2>
                <img src={Pic} width="800 px" height="600 px" alt="" />
            </div>
        );
    }
}
export default Home;