import React, { Component } from 'react'
import LogContainer from './LogContainer'
import { Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

class Log extends Component{


    render (){
        console.log(this.props)
        return( 
            
            <center>
            <Card className ="mb-3 logcard">
                <Card.Body>
                <Card.Title>{this.props.date}</Card.Title>
                 <Card.Text>{this.props.moodName}</Card.Text>
                 <Button variant="primary">Add Notes</Button>
                 </Card.Body>

                 
            </Card>
            </center>

        )
    }
}

export default Log