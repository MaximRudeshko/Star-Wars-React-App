import React, { Component } from 'react'

import ItemList from '../item-list/item-list'
import ItemDetails, { Record } from '../item-details/item-details'
import ErrorIndicator from '../error-indicator/error-indicator'
import SwapiService from '../../services/swapi-service'
import Row from '../content-row/content-row'
import ErrorBoundry from '../error-boundry/error-boundry'
import PersonList from '../sw-components/sw-components'


export default class PeoplePage extends Component{

    swapiService = new SwapiService()

    state = {
        selectedPerson: null,
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    render(){

        if(this.state.hasError){
            return <ErrorIndicator/>
        }



        const personDetails = (
            <ErrorBoundry>
                <ItemDetails 
                    itemId = {this.state.selectedPerson}
                    getData = {this.swapiService.getPerson}
                    getImage = {this.swapiService.getPersonImage}>
                    <Record label = 'Gender' field = 'gender'/>        
                    <Record label = 'Birth Year' field = 'birthYear'/>        
                    <Record label = 'Eye color' field = 'eyeColor'/>        
                </ItemDetails>
            </ErrorBoundry> 
        )

        const personList = (
            <ItemList 
            getData = {this.swapiService.getAllPeople} 
            onItemSelected = {this.onPersonSelected}
            >
                {(i) => (
                    `${i.name}`
                )}
            </ItemList>
        )

        return(
            <Row left = {personList} right = {personDetails}/>
        )
    }
}