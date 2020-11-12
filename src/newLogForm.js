import { render } from '@testing-library/react';
import React, { Component } from 'react'
import LogContainer from './LogContainer'

let thisday = new Date();
let currentDate = thisday.getFullYear()+'-'+(thisday.getMonth()+1)+'-'+thisday.getDate();

class NewLogForm extends React.Component{
 

        state = {
            mood_id: "4",
            date: thisday,
            notes: ""
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
                user_id: 1,
                notes: this.state.notes
            })
        })
            .then(res => res.json())
            .then((newlyCreatedLog)=> {
                this.props.addLogToState(newlyCreatedLog)
            })

            this.setState({
                notes: ""
        }
        )
            
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
                <br></br>
                <center><label htmlFor="notes"></label></center>
                <center><textarea
                    type="text"
                    id="notes"
                    name="notes"
                    rows="5"
                    columns="50"
                    placeholder="Add some notes about your day..."
                    value={this.state.notes}
                    onChange={this.handleInputChange} /></center>

                    <input type=" button submit" className="btn btn-outline-secondary" value="Log" />
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