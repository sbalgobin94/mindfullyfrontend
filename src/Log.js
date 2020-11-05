import React, { Component } from 'react'
import LogContainer from './LogContainer'

class Log extends Component{


    render (){
        let {mood_id, date} = this.props.log

        return( 
            <div className ="container">
                 <h6>{date}</h6>
                 <p>{this.props.moodName}</p>
            </div>

        )
    }
}

export default Log