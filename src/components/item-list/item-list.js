import React, { Component } from 'react'

import './item-list.css'
import SwapiService from '../../services/swapi-service'
import Spinner from '../spinner/spinner';

export default class ItemList extends Component{

    swapiService = new SwapiService() 

    state = {
        peopleList: null
    };

    componentDidMount(){
        this.swapiService
            .getAllPeople()
            .then(peopleList => {
                this.setState({
                    peopleList
                })
            })
    }

    

    renderItems(arr){
       return arr.map(item => {
           return(
           <li className = 'list-group-item'
           key = {item.id}
           onClick = {() => this.props.onItemSelected(item.id)}
           >{item.name}</li>
           )
       })
    }


    render(){
        console.log(this.props)
        if(!this.state.peopleList){
            return <Spinner/>
        }
        
        const items = this.renderItems(this.state.peopleList)
        return(
            <ul className = 'item-list list-group'>
                {items}
            </ul>
        )
    }
}