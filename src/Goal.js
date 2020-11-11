import React, { Component } from 'react'
import GoalContainer from './GoalContainer'
import NewGoalForm from './NewGoalForm'
import { Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Accordion from 'react-bootstrap/Accordion'

class Goal extends Component{


    render (){
        let {id, name, status} = this.props.goal

        let finished = "finished"
        return( 
        <center>
        <div className="card goalcard">
        <ul className="list-group list-group-flush">
        <li className="list-group-item">{status == true? finished: <s>{name}</s>}</li>
        </ul>
        </div>
        <br></br>
        </center>
        
             

        )
    }
} 

export default Goal