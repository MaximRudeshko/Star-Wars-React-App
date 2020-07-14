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
import ErrorBoundry from '../error-boundry/error-boundry'

import {BrowserRouter as Router, Route} from 'react-router-dom'


export default class App extends Component{

    state = {
        selectedPerson: null,
        swapiService: new SwapiService()
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
            <ErrorBoundry>
                <Router>
                <SwapiServiceProvider value = {this.state.swapiService}>
                    <div className = 'app container'>
                        <Header onServiceChange = {this.onServiceChange}/>
                        <RandomPlanet/>
                            <Route path = '/' render = {() => <h2>Welcome to Star Wars DB</h2>} exact/>
                            <Route path = '/people' component = {PersonPage}/>
                            <Route path = '/planets' component = {PlanetPage}/>
                            <Route path = '/starships' component = {StarshipPage}/>
                    </div>
                </SwapiServiceProvider>
                </Router>
            </ErrorBoundry>
        )
    }
}