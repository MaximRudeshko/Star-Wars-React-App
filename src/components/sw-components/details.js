import React from 'react'
import ItemDetails, {Record} from '../item-details/item-details'
import SwapiService from '../../services/swapi-service'
import ItemList from '../item-list/item-list'

const swapiService = new SwapiService()

const {
    getPerson,
    getStarship,
    getPlanet,
    getPlanetImage,
    getStarshipImage,
    getPersonImage,
} = swapiService



const PersonDetails = ({itemId}) => {
    return(
        <ItemDetails 
                getData = {getPerson}
                itemId = {itemId}
                getImage = {getPersonImage}>
                <Record field = 'model' label = '1'/>
                <Record field = 'manufacturer' label = '2'/>
                <Record field = 'costInCredits' label = '3'/>
        </ItemDetails>
    )

}
const PlanetDetails = ({itemId}) => {
    return(
        <ItemDetails 
                getData = {getPlanet}
                itemId = {itemId}
                getImage = {getPlanetImage}>
                <Record field = 'model' label = '1'/>
                <Record field = 'manufacturer' label = '2'/>
                <Record field = 'costInCredits' label = '3'/>
        </ItemDetails>
    )
}
const StarshipDetails = ({itemId}) => {
    return(
        <ItemDetails 
                getData = {getStarship}
                itemId = {itemId}
                getImage = {getStarshipImage}>
                <Record field = 'model' label = '1'/>
                <Record field = 'manufacturer' label = '2'/>
                <Record field = 'costInCredits' label = '3'/>
            </ItemDetails>
    )
}

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}