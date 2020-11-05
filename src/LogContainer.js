import React, { Component } from 'react'
import Log from './Log'

function LogContainer(props){
    let arrayOfComponents = props.logs.map((singularLog) => {
        console.log(props.moods)
        return <Log 
            key={singularLog.id} 
            log={singularLog}
            moodName={singularLog.mood.name}
            date={singularLog.date}
            moods={props.moods}
            
        />
    })
    
    return(
        <ul>

            { arrayOfComponents }

        </ul>
    )

    
}



export default LogContainer