import React, { Component } from 'react'
import Row from '../content-row/content-row'
import {PlanetList} from '../sw-components/sw-components'
import PlanetDetails from '../sw-components/planet-details'


export default class PlanetPage extends Component{
    state = {
        selectedItem: null
    }

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem})
    }

    render(){
        return(
            <Row left = {<PlanetList onItemSelected = {this.onItemSelected}/>}
             right = {<PlanetDetails itemId = {this.state.selectedItem}/>}/>
        )
    }


}