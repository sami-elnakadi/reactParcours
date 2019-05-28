import React, { Component } from 'react';
import Poser from './Poser';
import Photon from './Photon';
import Icon from './Icon';
import More from './More';
import Sign from './Sign';
import Footer from './Footer';


export default class App extends Component {

    render(){
    return (
    <div className="App row">
        <div>
            <Photon/>
        </div>    
        <div>
            <Poser/>
        </div>
        <div>
            <Icon/>
        </div>
        <div>
            <More/>
        </div>
        <div>
            <Sign/>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
    );
}
}
