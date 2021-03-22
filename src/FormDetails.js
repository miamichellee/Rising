import React, { Component } from 'react';


export class FormDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return(
            <div>
                <br/>
                <h1>Profile Details</h1>
                <label htmlFor="userName">Username</label>
                <input type="text" 
                name="userName" 
                placeholder="userName" 
                onChange={handleChange('userName')}
                defaultValue={values.userName}></input>
                <br/>
                <label htmlFor="instagramHandle">Intagram Handle</label>
                <input type="text" 
                name="instagramHandle" 
                placeholder="instagramHandle" 
                onChange={handleChange('instagramHandle')}
                defaultValue={values.instagramHandle}></input>
                <br/>
                <label htmlFor="twitterHandle">Twitter Handle</label>
                <input type="text" 
                name="twitterHandle" 
                placeholder="twitterHandle" 
                onChange={handleChange('twitterHandle')}
                defaultValue={values.twitterHandle}></input>
                <br/>
                <label htmlFor="city">Location(City, State)</label>
                <input type="text" 
                name="city" 
                placeholder="city" 
                onChange={handleChange('city')}
                defaultValue={values.city}></input>
                <br/>
                <label htmlFor="bio">Bio</label>
                <input type="text" 
                name="bio" 
                placeholder="bio" 
                onChange={handleChange('bio')}
                defaultValue={values.bio}></input>
                <button onClick={this.continue}>Continue</button>
                <br/>
                

            </div>
        )
    }
}

export default FormDetails