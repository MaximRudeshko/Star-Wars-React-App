import React, { Component } from 'react'
import Header from '../header/header'
import './app.css'
import RandomPlanet from '../random-planet/random-planet'
import PeoplePage from '../people-page/people-page'
import SwapiService from '../../services/swapi-service'
import ItemList from '../item-list/item-list'
import PersonDetails from '../person-details/person-details'

export default class App extends Component{

    swapiService = new SwapiService()

    state = {
        selectedPerson: null
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
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