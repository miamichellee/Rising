import React, { Component } from 'react';


export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: { serName, instagramHandle, 
            twitterHandle, city, bio} } = this.props;
        return(
            <div>
                <br/>
                <h1>Confirm Profile Details</h1>
                <button onClick={this.continue}>Continue</button>
                <button onClick={this.back}>Back</button>
                <br/>
                

            </div>
        )
    }
}

export default Confirm