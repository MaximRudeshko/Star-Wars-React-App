import React, { Component } from 'react'
import Header from '../header/header'
import './app.css'
import RandomPlanet from '../random-planet/random-planet'
import PeoplePage from '../people-page/people-page'

export default class App extends Component{

    state = {
        selectedPerson: null
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
        console.log(id)
    }

    render(){
        return(
            <div className = 'app container'>
                <Header/>
                <RandomPlanet/>
                <PeoplePage/>
            </div>
        )
    }
}