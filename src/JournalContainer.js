import React, { Component } from 'react'
import Journal from './Journal'

function JournalContainer(props){
    let arrayOfComponents = props.journalEntries.map((singularJournal) => {
        return <Journal 
            key={singularJournal.id} 
            journal={singularJournal}
            content={singularJournal.content}
            date={singularJournal.date}
            

            
        />
    })
    
    return(
        <ul>

            { arrayOfComponents }

        </ul>
    )

    
}

export default JournalContainer