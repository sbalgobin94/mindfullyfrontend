import { render } from '@testing-library/react';
import React, { Component } from 'react'
import LogContainer from './LogContainer'

let thisday = new Date();
let currentDate = thisday.getFullYear()+'-'+(thisday.getMonth()+1)+'-'+thisday.getDate();

class NewLogForm extends React.Component{
 

        state = {
            mood_id: "4",
            date: thisday
        }

    handleInputChange = (evt) => {
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }
    
    
        handleSubmit = (evt) => {
            evt.preventDefault()
    
        fetch("http://localhost:3000/logs", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({
                mood_id: parseInt(this.state.mood_id),
                date: this.state.date,
                user_id: 1
            })
        })
            .then(res => res.json())
            .then((newlyCreatedLog)=> {
                this.props.addLogToState(newlyCreatedLog)
            })

            
    }

    render(){
        return(
            <div>
                <br></br>
                <br></br>
                <br></br>
                <center>
                <center><h3 className="feel">How are you feeling today?</h3></center>
                <br></br>
                <form onSubmit={this.handleSubmit}>
                <label htmlFor="mood_id"> 
                <select name="mood_id" id="mood_id" value={this.state.mood_id} onChange={this.handleInputChange}>
                    <option value="4">Awesome 😁</option>
                    <option value="3">Happy 🙂</option>
                    <option value="2">Meh 😕</option>
                    <option value="1">Horrible 😰</option>
                </select>
        
                </label>    
        
                    <input type="submit" value="Log" />
                </form>
                </center>
                <br></br>
                <br></br>
                <br></br>
            </div>
            
        )
    }
}

export default NewLogForm