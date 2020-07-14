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

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import StarshipDetails from '../sw-components/starship-details'
import PersonDetails from '../sw-components/person-details'
import PlanetDetails from '../sw-components/planet-details'
import SecretPage from '../pages/secret-pages'
import LoginPage from '../pages/login-page'


export default class App extends Component{

    state = {
        selectedPerson: null,
        swapiService: new SwapiService(),
        isLogged: false
    }

    onLogin = () => {
        this.setState(({isLogged}) => {
            return {isLogged: !isLogged}
        })
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

        const {isLogged} = this.state

        return(
            <ErrorBoundry>
                <Router>
                <SwapiServiceProvider value = {this.state.swapiService}>
                    <div className = 'app container'>
                        <Header onServiceChange = {this.onServiceChange}/>
                        <RandomPlanet/>
                        <Switch>
                            <Route path = '/' render = {() => <h2>Welcome to Star Wars DB</h2>} exact/>
                            {/* Routing for person page */}
                            <Route path = '/people' component = {PersonPage} exact/>
                            <Route path = '/people/:id' render = {({match}) => <PersonDetails itemId = {match.params.id}/>}/>
                            {/* routing for planet page */}
                            <Route path = '/planets' component = {PlanetPage} exact/>
                            <Route path = '/planets/:id' render = {({match}) => <PlanetDetails itemId = {match.params.id}/>}/>
                            {/*Routing for starhip page  */}
                            <Route path = '/starships' component = {StarshipPage} exact/>
                            <Route path = '/starships/:id' render = {({match}) => <StarshipDetails itemId = {match.params.id}/>}/>
                            {/* Route for autorization */}
                            <Route path = '/secret' render = {() => (
                                <SecretPage isLogged = {isLogged}/>
                            )}/>
                            <Route path = '/login' render = {() => (
                                <LoginPage isLogged = {isLogged}  onLogin = {this.onLogin}/>
                            )}/>
                            <Route render = {() => <h4>Page not found</h4>}/>
                        </Switch>
                    </div>
                </SwapiServiceProvider>
                </Router>
            </ErrorBoundry>
        )
    }
}