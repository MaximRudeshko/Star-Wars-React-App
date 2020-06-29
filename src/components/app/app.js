import React, { Component } from 'react'
import Header from '../header/header'
import './app.css'
import RandomPlanet from '../random-planet/random-planet'
import ItemList from '../item-list/item-list'
import PersonDetails from '../person-details/person-details'

export default class App extends Component{

    state = {
        selectedPerson: null
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
        console.log(id)
    }

    render(){
        return(
            <div className = 'app container'>
                <Header/>
                <RandomPlanet/>
                <div className = 'row'>
                    <div className ='col-6'>
                        <ItemList onItemSelected = {this.onPersonSelected}/>
                    </div>
                    <div className ='col-6'>
                        <PersonDetails personId = {this.state.selectedPerson}/>
                    </div>
                </div>
            </div>
        )
    }
}