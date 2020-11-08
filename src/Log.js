import React, { Component } from 'react'
import LogContainer from './LogContainer'
import { Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

class Log extends Component{


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
        console.log(this.props)
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
                 <Button variant="dark" onClick={this.handleUpdate}>Edit</Button>
                 </Card.Body>

                 
            </Card>
            </center>

        )
    }
}

export default Log