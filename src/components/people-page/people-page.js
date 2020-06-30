import React, { Component } from 'react'

import ItemList from '../item-list/item-list'
import PersonDetails from '../person-details/person-details'
import ErrorIndicator from '../error-indicator/error-indicator'
import SwapiService from '../../services/swapi-service'
import Row from '../content-row/content-row'


 class ErrorBoundry extends Component{
    state = {
        hasError : false
    }

    componentDidCatch(){
        this.setState({
            hasError: true
        })
    }

    render(){

        if(this.state.hasError){
            return <ErrorIndicator/>
        }

        return this.props.children
    }
}



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
                <PersonDetails personId = {this.state.selectedPerson}/>
            </ErrorBoundry> 
        )

        return(
            <Row left = {itemList} right = {personDetails}/>
        )
    }
}