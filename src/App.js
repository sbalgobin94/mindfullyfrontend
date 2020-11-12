
import './App.css';
import Header from './header'
import React, { Component } from 'react'
import JournalContainer from './JournalContainer'
import NewJournalForm from './newJournalForm'
import LogContainer from './LogContainer'
import GoalContainer from './GoalContainer'
import NewLogForm from './newLogForm'
import MoodChart from './MoodChart'
import { Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Line} from 'react-chartjs-2'
import Search from './Search'
import NewGoalForm from './NewGoalForm'


import { Route, Switch, Link, NavLink } from 'react-router-dom'

class App extends Component {

  state = {
    journalEntries: [],
    logs: [],
    moods: [],
    goals: [],
    searchTerm: ""
  }

  changeSearchTerm = (termFromChild) => {
    this.setState({
      searchTerm: termFromChild
    })
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

      fetch("http://localhost:3000/goals")
      .then(res => res.json())
      .then((arrayOfGoals) => {
        this.setState({
          goals: arrayOfGoals
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
  }

  addGoalToState = (newlyCreatedGoal) => {
    let copyOfGoals= [newlyCreatedGoal, ...this.state.goals]
    this.setState({
      goals: copyOfGoals
    })
  }
  
  deleteJournalFromState = (deletedID) => {
    let copyOfJournals = this.state.journalEntries.filter(journal => {
      return journal.id !== deletedID
    })
    this.setState({
      journalEntries: copyOfJournals
    })
  }

  deleteLogFromState = (deletedID) => {
    let copyOfLogs = this.state.logs.filter(log => {
      return log.id !== deletedID
    })
    this.setState({
      logs: copyOfLogs
    })
  }

  deleteGoalFromState = (deletedID) => {
    let copyOfGoals = this.state.goals.filter(goal => {
      return goal.id !== deletedID
    })
    this.setState({
      goals: copyOfGoals
    })
  }

  

  updateJournalFromState = (updatedObj) => {
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

  updateLogFromState = (updatedObj) => {
    let copyOfLogs = this.state.logs.map((log) => {
      if(log.id === updatedObj.id){
        return updatedObj
      } else {
        return log
      }
    })
    this.setState({
      logs: copyOfLogs
    })
  }

  updateGoalFromState = (updatedObj) => {
    let copyOfGoals = this.state.goals.map((goal) => {
      if(goal.id === updatedObj.id){
        return updatedObj
      } else{
        return goal
      }
    })
    this.setState({
      goals: copyOfGoals
    })
  }

 


  render() {
    let {journalEntries, searchTerm} = this.state
    let filteredArray = journalEntries.filter((journal) => {
      return journal.content.toLowerCase().includes(searchTerm.toLowerCase())
    })

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

              <NavLink 
                key= "goals"
                to={`/goals`}>
                  Goals
              </NavLink>
              </ul>
            </aside>

          
          <Route path="/journals">
            
            <NewJournalForm
            addJournalToState= {this.addJournalToState} />

            < Search 
            searchTerm={this.state.searchTerm} 
            changeSearchTerm={this.changeSearchTerm}
            />

            <JournalContainer journalEntries = {filteredArray}
             deleteJournalFromState={this.deleteJournalFromState}
             updateJournalFromState={this.updateJournalFromState} />

          </Route>

          <Route path="/logs">
          <MoodChart logs={this.state.logs}/>
          <NewLogForm
            addLogToState= {this.addLogToState}
            moods={this.state.moods} />

            <LogContainer 
            moods={this.state.moods}
            logs={this.state.logs}
            deleteLogFromState={this.deleteLogFromState}
            updateLogFromState={this.updateLogFromState} />
          </Route>

          <Route path='/goals'>
            <NewGoalForm 
            addGoalToState={this.addGoalToState}
            />
            <GoalContainer 
              goals={this.state.goals}
              updateGoalFromState={this.updateGoalFromState}
              deleteGoalFromState={this.deleteGoalFromState}
            />

          </Route>
        </div>
      
        

    )
  }
}

export default App;
