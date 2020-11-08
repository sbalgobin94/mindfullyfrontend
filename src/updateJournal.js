import { render } from '@testing-library/react';
import React, { Component } from 'react'
import JournalContainer from './JournalContainer'
import { Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

let today = new Date();
let currentDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

class UpdateJournalForm extends React.Component{

        state = {
            date: today,
            content: this.props.content
        }

    handleInputChange = (evt) => {
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }
    
    
        handleSubmit = (evt) => {
            evt.preventDefault()
            console.log(this.props.journal.id)
    
        fetch(`http://localhost:3000/journals/${this.props.journal.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({
                content: this.state.content,
                date: this.state.date,
                user_id: 1
            })
        })
            .then(res => res.json())
            .then((updatedObj)=> {
                this.props.updateJournalFromState(updatedObj)
            })

            this.setState({
                content: ""
        }
        )
            
    }

    render(){
        return(
            <div>
            <h2></h2>
            <br></br>
            <p align = "center">
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="content"></label>
                <textarea 
                id="content" 
                name="content" 
                placeholder="Update entry..."
                value={this.state.content} 
                onChange={this.handleInputChange}
                rows="10" 
                cols="30">Start journaling...</textarea>
                <br></br>
                <input type="submit" value="Submit" />
            </form>
            </p>
        </div>
        )
    }
}

export default UpdateJournalForm