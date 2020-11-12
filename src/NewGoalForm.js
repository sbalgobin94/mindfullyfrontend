import { render } from '@testing-library/react';
import React, { Component } from 'react'
import GoalContainer from './GoalContainer'
import { Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Accordion from 'react-bootstrap/Accordion'



class NewGoalForm extends React.Component{

        state = {
            user_id: 1,
            name: "",
            status: false
        }

    handleInputChange = (evt) => {
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }
    
    
        handleSubmit = (evt) => {
            evt.preventDefault()
    
        fetch("http://localhost:3000/goals", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({
                user_id: 1,
                status: false,
                name: this.state.name
            })
        })
            .then(res => res.json())
            .then((newlyCreatedGoal)=> {
                this.props.addGoalToState(newlyCreatedGoal)
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
                <br></br>
                <br></br>
                <br></br>
                <center>
                <Accordion>
                <Card>
                    
                    <Accordion.Toggle as={Button} variant="link" eventKey="3" className="accordion acc3" onClick={this.displayUpdateForm}>
                    ➕
                    </Accordion.Toggle>
                    
                    <Accordion.Collapse eventKey="3">
                    <Card.Body><center><form onSubmit={this.handleSubmit}>
                <label htmlFor="name"></label>
                <textarea 
                className= "scrollabletextbox2"
                id="name" 
                name="name" 
                placeholder="What do you want to achieve?"
                value={this.state.name} 
                onChange={this.handleInputChange}
                rows="5"
                cols="20"

                ></textarea>
                <br></br>
                <center><input type="submit" value="Set" /></center>
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

export default NewGoalForm