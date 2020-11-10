import React, { Component } from 'react'
import Log from './Log'

function LogContainer(props){
    let arrayOfComponents = props.logs.map((singularLog) => {
        return <Log 
            key={singularLog.id} 
            log={singularLog}
            notes={singularLog.notes}
            moodName={singularLog.mood.name}
            moodImg={singularLog.mood.img_url}
            value={singularLog.mood.value}
            date={singularLog.date}
            moods={props.moods}
            deleteLogFromState={props.deleteLogFromState}
            updateLogFromState={props.updateLogFromState}
            
        /> 
    })
    
    return(
        <ul>

            { arrayOfComponents }

        </ul>
    )

    
}



export default LogContainer