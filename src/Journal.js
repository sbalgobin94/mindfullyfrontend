import React, { Component } from 'react'
import JournalContainer from './JournalContainer'

class Journal extends Component{
    render (){
        let {id, content, date} = this.props.journal

        return( 
            <div className ="container">
                 <h6>{date}</h6>
                 <p>{content}</p>
            </div>

        )
    }
}

export default Journal