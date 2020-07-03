import React from 'react'
import ItemDetails, {Record} from '../item-details/item-details'
import {SwapiServicesConsumer} from '../swapi-services-context/swapi-services-context'


const PersonDetails = ({itemId}) => {
    return(
       <SwapiServicesConsumer>
           {
               ({getPerson, getPersonImage}) => {
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
           }
       </SwapiServicesConsumer>
    )

}
const PlanetDetails = ({itemId}) => {
    return(
        <SwapiServicesConsumer>
            {({getPlanet, getPlanetImage}) => {
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
            }}
        </SwapiServicesConsumer>
    )
}
const StarshipDetails = ({itemId}) => {
    return(
        <SwapiServicesConsumer>
            {
                ({getStarship, getStarshipImage}) => {
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
            }
        </SwapiServicesConsumer>
    )
}

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}