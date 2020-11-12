import React, { Component } from 'react'
import { Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Accordion from 'react-bootstrap/Accordion'
import './Home.css'
import { render } from '@testing-library/react'

    

function Home (props){

    
        let arrayOfQuotes = props.quotes.map((singularQuote) => {
            return singularQuote
    
        })

        let quote = arrayOfQuotes[Math.floor(Math.random() * arrayOfQuotes.length)];

        console.log(quote)

        return(
           
            <div className = "homequote">
            <br></br>
            <br></br>
            
            <p>{quote.text}</p>
            <p>-{quote.author}</p>
            </div>
        )


        
    
        
}

export default Home