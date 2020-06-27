import React, { Component } from 'react'
import Header from '../header/header'
import './app.css'
import RandomPlanet from '../random-planet/random-planet'
import ItemList from '../item-list/item-list'
import PersonDetails from '../person-details/person-details'

export default class App extends Component{
    render(){
        return(
            <div className = 'app container'>
                <Header/>
                <RandomPlanet/>
                <div className = 'row'>
                    <div className ='col-6'>
                        <ItemList/>
                    </div>
                    <div className ='col-6'>
                        <PersonDetails/>
                    </div>
                </div>
            </div>
        )
    }
}