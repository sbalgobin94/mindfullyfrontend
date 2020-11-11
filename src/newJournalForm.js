import { render } from '@testing-library/react';
import React, { Component } from 'react'
import JournalContainer from './JournalContainer'
import { Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Accordion from 'react-bootstrap/Accordion'

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
                <br></br>
                <br></br>
                <br></br>
                <center>
                <Accordion>
                <Card>
                    
                    <Accordion.Toggle as={Button} variant="link" eventKey="1" className="accordion" onClick={this.displayUpdateForm}>
                    ➕
                    </Accordion.Toggle>
                    
                    <Accordion.Collapse eventKey="1">
                    <Card.Body><center><form onSubmit={this.handleSubmit}>
                <label htmlFor="content"></label>
                <textarea 
                className= "scrollabletextbox2"
                id="content" 
                name="content" 
                placeholder="Start journaling..."
                value={this.state.content} 
                onChange={this.handleInputChange}
                rows="10"
                cols="50"

                >Start journaling...</textarea>
                <br></br>
                <center><input type="submit" value="Publish" /></center>
                <br></br>
            </form></center></Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            </center>
            <br></br>
            <br></br>
            <br></br>

        </div>
        )
    }
}

export default NewJournalForm