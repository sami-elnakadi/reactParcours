import React, { Component } from 'react';
import Network from './Network';
import Prediction from './Prediction';

export default class App extends Component {

    render(){
    return (
    <div className="App row">
        <div className="col-md-2">
            <Network />
        </div>
        <div className="col-md-10">
            <Prediction />
        </div>
    </div>
    );
}
}