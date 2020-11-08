import { render } from '@testing-library/react';
import React, { Component } from 'react'
import LogContainer from './LogContainer'
import Log from './Log'

let today = new Date();
let currentDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

class UpdateLogForm extends React.Component{
 

        state = {
            mood_id: this.props.mood_id,
            date: this.props.date
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
            date: this.state.date
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

export default UpdateLogForm