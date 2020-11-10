import { render } from '@testing-library/react';
import React, { Component } from 'react'
import JournalContainer from './JournalContainer'
import { Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

let thisday = new Date();
let currentDate = thisday.getFullYear()+'-'+(thisday.getMonth()+1)+'-'+thisday.getDate();

class NewJournalForm extends React.Component{

        state = {
            date: thisday,
            content: ""
        }

    handleInputChange = (evt) => {
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }
    
    
        handleSubmit = (evt) => {
            evt.preventDefault()
    
        fetch("http://localhost:3000/journals", {
            method: "POST",
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
            .then((newlyCreatedJournal)=> {
                this.props.addJournalToState(newlyCreatedJournal)
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
                placeholder="Start journaling..."
                value={this.state.content} 
                onChange={this.handleInputChange}
                rows="10" 
                cols="40">Start journaling...</textarea>
                <br></br>
                <input type="submit" value="Publish" />
            </form>
            </p>
        </div>
        )
    }
}

export default NewJournalForm