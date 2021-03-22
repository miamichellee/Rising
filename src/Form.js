import React, { Component } from 'react';
import FormDeatils from './FormDetails';
import Confirm from './Confirm';

export class Form extends Component {
    state = {
        step: 1,
        userName: ' ',
        instagramHandle: ' ',
        twitterHandle: ' ',
        city: ' ',
        bio: ' ',
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    render(){
        const { step } = this.state;
        const{ userName, instagramHandle, 
            twitterHandle, city, bio } = this.state;
        const values = { userName, instagramHandle, 
            twitterHandle, city, bio }
        switch(step){
            case 1:
                return(
                    <FormDeatils 
                      nextStep = {this.nextStep}
                      handleChange = {this.handleChange}
                      values = {values} 
                />
                );
            case 2:
                return(
                    <Confirm 
                      nextStep = {this.nextStep}
                      prevStep = {this.prevStep}
                      values = {values} 
                />
                );
            case 3:
                return <h1>Sucessfully Changed!</h1>

        }
    }
}

export default Form