import { render } from '@testing-library/react';
import React, { Component } from 'react'
import LogContainer from './LogContainer'
import Log from './Log'

let thisday = new Date();
let currentDate = thisday.getFullYear()+'-'+(thisday.getMonth()+1)+'-'+thisday.getDate();

class UpdateLogForm extends React.Component{
 

        state = {
            mood_id: this.props.mood_id,
            date: this.props.date,
            notes: this.props.notes
        }

    handleInputChange = (evt) => {
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }
    
    
    handleSubmit = (evt) => {
        evt.preventDefault()
    

    fetch(`http://localhost:3000/logs/${this.props.log.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify({
            user_id: 1,
            mood_id: this.state.mood_id,
            date: this.state.date,
            notes: this.state.notes
        })
    })
        .then(res => res.json())
        .then((updatedObj)=> {
            this.props.updateLogFromState(updatedObj)
        })

    //     this.setState({
    //         content: ""
    // }
    // )
        
}
    render(){
        return(
            <div>
                <center>
                <form onSubmit={this.handleSubmit}>
                <label htmlFor="mood_id"> 
                <select name="mood_id" id="mood_id" value={this.state.mood_id} onChange={this.handleInputChange}>
                    <option value="4">Awesome 😁</option>
                    <option value="3">Happy 🙂</option>
                    <option value="2">Meh 😕</option>
                    <option value="1">Horrible 😰</option>
                 
                </select>
                </label>    

                <center><label htmlFor="notes"></label></center>
                <center><textarea
                    type="text"
                    id="notes"
                    name="notes"
                    rows="5"
                    columns="10"
                    placeholder="Add some notes about your day..."
                    value={this.state.notes}
                    onChange={this.handleInputChange} /></center>
        
                    <input type="submit" value="Enter" />
                </form>
                </center>
               
            </div>
            
        )
    }
}

export default UpdateLogForm