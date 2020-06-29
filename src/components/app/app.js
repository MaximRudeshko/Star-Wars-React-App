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
        console.log(id)
    }

    render(){
        return(
            <div className = 'app container'>
                <Header/>
                <RandomPlanet/>
                <PeoplePage/>

                <div className = 'row mt-2 mb-2'>
                    <div className ='col-6'>
                        <ItemList 
                        getData = {this.swapiService.getAllStarships}
                        onItemSelected = {this.onPersonSelected}
                        renderItem = {item => item.name}/>
                    </div>
                    <div className ='col-6'>
                        <PersonDetails personId = {this.state.selectedPerson}/>
                    </div>
                </div>

                <div className = 'row mt-2 mb-2'>
                    <div className ='col-6'>
                        <ItemList 
                        getData = {this.swapiService.getAllPlanet}
                        onItemSelected = {this.onPersonSelected}
                        renderItem = {item => item.name}/>
                    </div>
                    <div className ='col-6'>
                        <PersonDetails personId = {this.state.selectedPerson}/>
                    </div>
                </div>
            </div>
        )
    }
}