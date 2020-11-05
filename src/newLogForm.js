import { render } from '@testing-library/react';
import React, { Component } from 'react'
import LogContainer from './LogContainer'

class NewLogForm extends React.Component{

        state = {
            mood_id: 0,
            date: "November 5, 2020"
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
                <h2>How are you feeling today?</h2>
                <form onSubmit={this.handleSubmit}>
                <label> 
          <select value={this.state.mood_id} onChange={this.handleInputChange}>
          <option mood_id="0">Happy</option>
            <option mood_id="1">Sad</option>
            <option mood_id="2">Anxious</option>
            <option mood_id="3">Tired</option>
            <option mood_id="4">Excited</option>
          </select>
        </label>
        
                    <input type="submit" value="Enter" />
                </form>
            </div>
        )
    }
}

export default NewLogForm