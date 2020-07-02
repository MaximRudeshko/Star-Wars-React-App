import React, { Component } from 'react'

import './item-list.css'
import SwapiService from '../../services/swapi-service'
import Spinner from '../spinner/spinner';
import WithData from '../with-data/with-data'

const ItemList = (props) => {

    const {data, onItemSelected ,renderItem} = props
    const items = data.map(item => {
        const {id} = item
        const label = renderItem(item)

        return (
            <li className = 'list-group-item' 
            key = {id}
            onClick = {() => onItemSelected(id)}>
                {label}
            </li>
        )
    })

    return(
       
        
            <ul className = 'item-list list-group'>
                {items}
            </ul>
        
    )
        
    
}

const {getAllPeople} = new SwapiService()

export default WithData(ItemList, getAllPeople)