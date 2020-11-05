import { render } from '@testing-library/react';
import React, { Component } from 'react'
import JournalContainer from './JournalContainer'

class NewJournalForm extends React.Component{

        state = {
            date: "November 4, 2020",
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
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="content"></label>
                <textarea 
                id="content" 
                name="content" 
                value={this.state.content} 
                onChange={this.handleInputChange}
                rows="10" 
                cols="30">Start journaling...</textarea>
   
                <input type="submit" value="New Entry" />
            </form>
        </div>
        )
    }
}

export default NewJournalForm