import React, { Component } from 'react';

class TransitionWrapper extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return this.props.children
    }
    componentWillAppear(callback) {
        //do something when the component will appear 
        
        callback();
    }
    
    componentDidAppear() {
        //do something when the component appeared 
        console.log('didapear');        
    }
    
    componentWillEnter(callback) {
        //do something when the component will enter 
        
        callback();
    }
    
    componentDidEnter() {
        //do something when the component entered 
    }
    
    componentWillLeave(callback) {
        //do something when the component will leave 
        callback();
    }
    
    componentDidLeave() {
        //do something when the component has left     
        console.log('didleave');        
    }
}

export default TransitionWrapper;