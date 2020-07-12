import React, { Component } from 'react'
import Header from '../header/header'
import './app.css'
import RandomPlanet from '../random-planet/random-planet'
import PersonPage from '../pages/person-page'
import PlanetPage from '../pages/planet-page'
import StarshipPage from '../pages/starships-page'
import SwapiService from '../../services/swapi-service'
import {SwapiServiceProvider} from '../swapi-services-context/swapi-services-context'
import DummySwapiService from '../../services/dummy-swapi-services'


export default class App extends Component{

    state = {
        selectedPerson: null,
        swapiService: new DummySwapiService()
    }

    onServiceChange = () => {
        this.setState(({swapiService}) => {
            const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;

            return {
                swapiService: new Service()
            }
        })
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    render(){

        return(
            <SwapiServiceProvider value = {this.state.swapiService}>
                <div className = 'app container'>
                    <Header onServiceChange = {this.onServiceChange}/>
                    <RandomPlanet/>
                    <PersonPage/>
                    <PlanetPage/>
                    <StarshipPage/>
                </div>
            </SwapiServiceProvider>
        )
    }
}