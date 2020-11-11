import React, { Component } from 'react'
import JournalContainer from './JournalContainer'
import UpdateJournalForm from './updateJournal'
import { Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Accordion from 'react-bootstrap/Accordion'

let today = new Date();
let currentDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

class Journal extends Component{

    state = {
        displayUpdateForm : false,
    }

    displayUpdateForm = () => {
        this.setState({
            displayUpdateForm: !this.state.displayUpdateForm
        })
    }



    handleDelete = (evt) => {
        fetch(`http://localhost:3000/journals/${this.props.journal.id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then((deletedObj) => {
                this.props.deleteJournalFromState(this.props.journal.id)
            })
    }

   
   


    render (){
        let {id, content, date} = this.props.journal

        let updateForm = null

        if (this.state.displayUpdateForm) {
            updateForm = <UpdateJournalForm updateJournalFromState={this.props.updateJournalFromState}
            journal={this.props.journal}
            content={this.props.journal.content}
            key={this.props.journal.id} />
        }


        return( 
            <center>

            <Card className ="journalcard card border-secondary">
                <Card.Body>
                <p align="right">
                <button className="delButton" onClick={this.handleDelete}>
                🗑️
                </button> 
                </p>
                
                 <Card.Header><p align="left" className="date"><strong>{date}</strong></p></Card.Header>
                 <p className= "scrollabletextbox" align="left">{content}
                 </p>
                 
               {/* <button className="card-link" onClick={this.displayUpdateForm}>✍️    
                </button>
                    {updateForm} */}
               

               
                </Card.Body>
            </Card>
            
            <Accordion>
                <Card>
                    
                    <Accordion.Toggle as={Button} variant="link" eventKey="0" className="accordion" onClick={this.displayUpdateForm}>
                    ✍️
                    </Accordion.Toggle>
                    
                    <Accordion.Collapse eventKey="0">
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

export default Journal