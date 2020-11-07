import React, { Component } from 'react'
import JournalContainer from './JournalContainer'
import UpdateJournalForm from './updateJournal'

let today = new Date();
let currentDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

class Journal extends Component{

    state = {
        displayUpdateForm : false
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
            <div className ="container">
                <p align="right">
                <button className="delButton" onClick={this.handleDelete}>
                🗑️
                </button> 
                </p>
                
                 <h6>{date}</h6>
                  
                 <p>{content}</p>
                 
                <button className="updButton" onClick={this.displayUpdateForm}>✍️    
                </button>

                {updateForm}

               
                
            </div>

             

        )
    }
}

export default Journal