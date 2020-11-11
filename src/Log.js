import React, { Component } from 'react'
import LogContainer from './LogContainer'
import { Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import UpdateLogForm from './updateLog'
import Accordion from 'react-bootstrap/Accordion'

class Log extends Component{

    state = {
        displayUpdateForm : false
    }

    displayUpdateForm = () => {
        this.setState({
            displayUpdateForm: !this.state.displayUpdateForm
        })
    }

    handleDelete = (evt) => {
        fetch(`http://localhost:3000/logs/${this.props.log.id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then((deletedObj) => {
                this.props.deleteLogFromState(this.props.log.id)
            })
    }



    render (){
        console.log(this.props.mood_id)
        let updateForm = null

        if (this.state.displayUpdateForm) {
            console.log(this.props)
            updateForm = <UpdateLogForm updateLogFromState={this.props.updateLogFromState}
            log={this.props.log}
            mood_id={this.props.log.mood_id}
            key={this.props.log.id}
            notes={this.props.log.notes}
            date={this.props.log.date} />
        }

        let logdate= this.props.date
        let newDate= new Date(logdate + 'T00:00:00')
        let options = {
            year: 'numeric', month: 'long', day: 'numeric'
        }
        newDate = newDate.toLocaleString('en-US', options)

        return( 
            
            <center>
            <Card className ="mb-3 logcard">
                <Card.Body>
                <p align="right">
                <button className="delButton" onClick={this.handleDelete}>
                🗑️
                </button> 
                </p>
                <p className= "date"><strong>{newDate}</strong></p>
                <img className= "moodimg" src={this.props.moodImg} alt="Card image"/>
                <br></br>
                <br></br>
                <p className= "notes scrollabletextbox2">{this.props.notes}</p>
                 </Card.Body>
            </Card>
            <Accordion>
                <Card>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2" className="accordion" onClick={this.displayUpdateForm}>
                    ✍️
                    </Accordion.Toggle>
                    
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>{updateForm}</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <br></br>
            <br></br>

            </center>

        )
    }
}

export default Log