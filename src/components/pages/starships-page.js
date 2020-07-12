import React, {Component} from 'react'
import Row from '../content-row/content-row'
import {StarshipList} from '../sw-components/sw-components'
import StarshipDetails from '../sw-components/starship-details'


export default class StarshipPage extends Component{
    state = {
        selectedItem: null
    }

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem})
    }

    render(){
        return(
            <Row left = {<StarshipList onItemSelected = {this.onItemSelected}/>}
                 right = {<StarshipDetails itemId = {this.state.selectedItem}/>}/>
        )
    }
}