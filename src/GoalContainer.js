import React, { Component } from 'react'
import Goal from './Goal'

function GoalContainer(props){
    let arrayOfComponents = props.goals.map((singularGoal) => {
        
        return <Goal
            key={singularGoal.id} 
            goal={singularGoal}
            name={singularGoal.name}
            status= {singularGoal.status}
            deleteGoalFromState={props.deleteGoalFromState}
            
        />

    })
    
    return(
        <ul>

            { arrayOfComponents }

        </ul>
    )

    
}

export default GoalContainer