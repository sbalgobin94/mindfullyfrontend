
import './App.css';
import Header from './header'
import React, { Component } from 'react'
import JournalContainer from './JournalContainer'
import NewJournalForm from './newJournalForm'
import LogContainer from './LogContainer'
import NewLogForm from './newLogForm'
import { Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Route, Switch, Link, NavLink } from 'react-router-dom'

class App extends Component {

  state = {
    journalEntries: [],
    logs: [],
    moods: []
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

      fetch("http://localhost:3000/moods")
      .then(res => res.json())
      .then((arrayOfMoods) => {
        this.setState({
          moods: arrayOfMoods
        })
      })

  }

  addJournalToState = (newlyCreatedJournal) => {
    let copyOfJournals = [newlyCreatedJournal, ...this.state.journalEntries]
    this.setState({
      journalEntries: copyOfJournals
    })
  }

  addLogToState = (newlyCreatedLog) => {
    let copyOfLogs = [newlyCreatedLog, ...this.state.logs]
    this.setState({
      logs: copyOfLogs
    })
    console.log(this.state.logs)
  }
  
  deleteJournalFromState = (deletedID) => {
    let copyOfJournals = this.state.journalEntries.filter(journal => {
      return journal.id !== deletedID
    })
    this.setState({
      journalEntries: copyOfJournals
    })
  }

  updateJournalFromState = (updatedObj) => {
    console.log(updatedObj)
    let copyOfJournals = this.state.journalEntries.map((journal) => {
      if(journal.id === updatedObj.id){
        return updatedObj
      } else {
        return journal
      }
    })
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

            <JournalContainer journalEntries = {this.state.journalEntries}
             deleteJournalFromState={this.deleteJournalFromState}
             updateJournalFromState={this.updateJournalFromState} />

          </Route>

          <Route path="/logs">
          <NewLogForm
            addLogToState= {this.addLogToState}
            moods={this.state.moods} />

            <LogContainer 
            moods={this.state.moods}
            logs={this.state.logs} />
          </Route>
          
        </div>

        

    )
  }
}

export default App;
