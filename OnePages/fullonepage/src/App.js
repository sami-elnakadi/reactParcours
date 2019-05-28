import React, { Component, Fragment } from 'react';
import Poser from './Poser';
import Photon from './Photon';
import Icon from './Icon';
import More from './More';
import Sign from './Sign';
import Footer from './Footer';


export default class App extends Component {

    render(){
    return (
    <Fragment>
            <Photon/>    
        
            <Poser/>
        
            <Icon/>
        
            <More/>
        
            <Sign/>
        
            <Footer/>
    </Fragment>
    )
}
}
