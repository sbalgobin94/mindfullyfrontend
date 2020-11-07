import React, { Component } from 'react'
import LogContainer from './LogContainer'
import { Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

class Log extends Component{


    render (){
        console.log(this.props)
        return( 
            
            <Card className ="mb-3">
                <Card.Body>
                <Card.Title>{this.props.date}</Card.Title>
                 <Card.Text>{this.props.moodName}</Card.Text>
                 <Button variant="primary">Add Notes</Button>
                 </Card.Body>

                 
            </Card>

        )
    }
}

export default Log