import React, { Component } from 'react'
import LogContainer from './LogContainer'
import { Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import UpdateLogForm from './updateLog'

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
        let updateForm = null

        if (this.state.displayUpdateForm) {
            console.log(this.props)
            updateForm = <UpdateLogForm updateLogFromState={this.props.updateLogFromState}
            log={this.props.log}
            mood_id={this.props.log.mood_id}
            key={this.props.log.id}
            date={this.props.log.date} />
        }

        return( 
            
            <center>
            <Card className ="mb-3 logcard">
                <Card.Body>
                <p align="right">
                <button className="delButton" onClick={this.handleDelete}>
                🗑️
                </button> 
                </p>
                <Card.Title>{this.props.date}</Card.Title>
                 <Card.Text>{this.props.moodName}</Card.Text>

                 <button className="card-link" onClick={this.displayUpdateForm}>Edit</button>
                 
                 </Card.Body>

                 
                 {updateForm}
                 
            </Card>
            </center>

        )
    }
}

export default Log