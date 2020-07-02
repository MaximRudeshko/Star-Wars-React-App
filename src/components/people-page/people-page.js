import React, { Component } from 'react'

import ItemList from '../item-list/item-list'
import ItemDetails, { Record } from '../item-details/item-details'
import ErrorIndicator from '../error-indicator/error-indicator'
import SwapiService from '../../services/swapi-service'
import Row from '../content-row/content-row'
import ErrorBoundry from '../error-boundry/error-boundry'


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

        const itemList = (
            <ItemList 
                getData = {this.swapiService.getAllPeople} 
                onItemSelected = {this.onPersonSelected}
                renderItem = {item => item.name}/>
        )

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

        return(
            <Row left = {itemList} right = {personDetails}/>
        )
    }
}