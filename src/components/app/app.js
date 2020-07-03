import React, { Component } from 'react'
import Header from '../header/header'
import './app.css'
import RandomPlanet from '../random-planet/random-planet'
import PeoplePage from '../people-page/people-page'
import SwapiService from '../../services/swapi-service'
import ItemList from '../item-list/item-list'
import Row from '../content-row/content-row'
import ItemDetails from '../item-details/item-details'
import {PersonList, StarshipList, PlanetList} from '../sw-components/sw-components'
import {PersonDetails, StarshipDetails, PlanetDetails} from '../sw-components/details'
import {Record} from '../item-details'
import {SwapiServiceProvider} from '../swapi-services-context/swapi-services-context'

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

        const {getPerson, getStarship, getPersonImage, getStarshipImage} = this.swapiService

        const personDetails = (
            <ItemDetails 
                getData = {getPerson}
                getImage = {getPersonImage}
                itemId = {11}>
                    
                <Record field = 'gender' label = 'male'/>
                <Record field = 'birthYear' label = '1996'/>
                <Record field = 'eyeColor' label = 'Blue'/>
            </ItemDetails>
        )

        const starshipDetails = (
            <ItemDetails 
                getData = {getStarship}
                itemId = {11}
                getImage = {getStarshipImage}>
                <Record field = 'model' label = '1'/>
                <Record field = 'manufacturer' label = '2'/>
                <Record field = 'costInCredits' label = '3'/>
            </ItemDetails>
        )

        return(
            <SwapiServiceProvider value = {this.swapiService}>
                <div className = 'app container'>
                    <Header/>
                    {/* <RandomPlanet/>
                    <PeoplePage/> 
                    <Row left = {personDetails} right = {starshipDetails}/> */}

                    <PersonDetails itemId = {3}/>
                    <PlanetDetails itemId = {4}/>
                    <StarshipDetails itemId = {5}/>

                    <PersonList/>
                    <StarshipList/>
                    <PlanetList/>
                </div>
            </SwapiServiceProvider>
        )
    }
}