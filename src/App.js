
import './App.css';
import Header from './header'
import React, { Component } from 'react'
import JournalContainer from './JournalContainer'
import NewJournalForm from './newJournalForm'

import { Route, Switch, Link, NavLink } from 'react-router-dom'

class App extends Component {

  state = {
    journalEntries: [],
    logs: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/journals")
      .then(res => res.json())
      .then((arrayOfJournals) => {
        this.setState({
          journalEntries: arrayOfJournals
        })
      })
      
      fetch("http://localhost:3000/logs")
      .then(res => res.json())
      .then((arrayOfLogs) => {
        this.setState({
          logs: arrayOfLogs
        })
      })

  }

  addJournalToState = (newlyCreatedJournal) => {
    let copyOfJournals = [newlyCreatedJournal, ...this.state.journalEntries]
    this.setState({
      journalEntries: copyOfJournals
    })
  }
  

  render() {
   
    return (
      <div className="App">
        <header className="App-header">
          <Header/>
        </header>
        <aside className="sidebar">
              <ul>
              <NavLink 
                key= "journals"
                to={`/journals`}>
                  Journal
              </NavLink>
              <NavLink 
                key= "logs"
                to={`/logs`}>
                  Mood Tracker
              </NavLink>
              </ul>
            </aside>

          
          <Route path="/journals">
            <NewJournalForm
            addJournalToState= {this.addJournalToState} />

            <JournalContainer journalEntries = {this.state.journalEntries} />

          </Route>
          
        </div>

        

    )
  }
}

export default App;
