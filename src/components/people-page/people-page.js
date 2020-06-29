import React, { Component } from 'react'

import ItemList from '../item-list/item-list'
import PersonDetails from '../person-details/person-details'
import ErrorIndicator from '../error-indicator/error-indicator'
import SwapiService from '../../services/swapi-service'


export default class PeoplePage extends Component{

    swapiService = new SwapiService()

    state = {
        selectedPerson: null,
        hasError: false
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }


    componentDidCatch(){
        this.setState({hasError: true})
    }


    render(){

        if(this.state.hasError){
            return <ErrorIndicator/>
        }

        return(
            <div className = 'row'>
                <div className ='col-6'>
                    <ItemList 
                    getData = {this.swapiService.getAllPeople}
                    onItemSelected = {this.onPersonSelected}
                    renderItem = {item => item.name}/>
                </div>
                <div className ='col-6'>
                    <PersonDetails personId = {this.state.selectedPerson}/>
                </div>
            </div>
        )
    }
}