import React, { Component } from 'react'
import JournalContainer from './JournalContainer'

class Journal extends Component{

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

        return( 
            <div className ="container">
                 <h6>{date}</h6>
                 <p>{content}</p>
                 <button className="delButton" onClick={this.handleDelete}>
                    x
                </button>
            </div>

        )
    }
}

export default Journal