import { render } from '@testing-library/react';
import React, { Component } from 'react'
import LogContainer from './LogContainer'

let today = new Date();
let currentDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

class NewLogForm extends React.Component{
 

        state = {
            mood_id: "1",
            date: today
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
                <center><h2>How are you feeling today?</h2></center>
                <form onSubmit={this.handleSubmit}>
                <label htmlFor="mood_id"> 
                <select name="mood_id" id="mood_id" value={this.state.mood_id} onChange={this.handleInputChange}>
                    <option value="1">Happy  🙂 </option>
                    <option value="2">Sad</option>
                    <option value="3">Anxious</option>
                    <option value="4">Tired</option>
                    <option value="5">Excited</option>
                </select>
        
                </label>    
        
                    <input type="submit" value="Enter" />
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