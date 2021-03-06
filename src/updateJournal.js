import { render } from '@testing-library/react';
import React, { Component } from 'react'
import JournalContainer from './JournalContainer'
import { Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

let thisday = new Date();
let currentDate = thisday.getFullYear()+'-'+(thisday.getMonth()+1)+'-'+thisday.getDate();

class UpdateJournalForm extends React.Component{

        state = {
            date: thisday,
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
                cols="50">Start journaling...</textarea>
                <br></br>
                <input type="button submit" className="btn btn-outline-secondary" value="Submit" />
            </form>
            </p>
        </div>
        )
    }
}

export default UpdateJournalForm