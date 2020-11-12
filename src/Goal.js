import React, { Component } from 'react'
import GoalContainer from './GoalContainer'
import NewGoalForm from './NewGoalForm'
import { Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Accordion from 'react-bootstrap/Accordion'

class Goal extends Component{

state = {
    user_id: 1,
    name: this.props.name,
    status: this.props.status
}

goalChange = (evt) => {
    console.log(this.state.status)
    this.setState({
        status: !this.state.status
    })
}

handleInputChange = (evt) => {
    this.setState({
        [evt.target.name] : evt.target.value
    })
}


    handleSubmit = (evt) => {
        evt.preventDefault()
      
    fetch(`http://localhost:3000/goals/${this.props.goal.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify({
            name: this.state.name,
            status: this.state.status,
            user_id: 1
        })
    })
        .then(res => res.json())
        .then((updatedObj)=> {
            this.props.updateGoalFromState(updatedObj)
        })

        this.setState({
            content: ""
    }
    )
        
}
    render (){
        let {id, name, status} = this.props.goal


        let finished = "finished"
        return( 
        <center>
        <div className="card goalcard" onClick={this.goalChange}>
        <ul className="list-group list-group-flush">
        <li className="list-group-item">{this.state.status == false? <p>{name}</p>:<s>{name}</s> }</li>
        </ul>
        </div>
        <br></br>
        </center>
        
             

        )
    }
} 

export default Goal