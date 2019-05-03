import React, { Component } from 'react';
import Departure from './Departure';

export default class Prediction extends Component {

        render(){
        return (
    
        <div className="Prediction">
    
            <h1>Station Name Line</h1>

            <div>
                <Departure />
            </div>

            <div>
                <Departure />
            </div>
        </div>
        
        );
    }
}