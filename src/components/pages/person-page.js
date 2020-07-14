import React, { Component } from 'react'
import Row from '../content-row/content-row'
import {PersonList} from '../sw-components/sw-components'
import PersonDetails from '../sw-components/person-details'


export default class PersonPage extends Component{
    state = {
        selectedItem: null
    }

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem})
    }

    render(){
        return(
            <Row 
            left = {<PersonList onItemSelected = {this.onItemSelected}/>} 
            right = {<PersonDetails itemId = {this.state.selectedItem}/>}/>
        )
    }
}
