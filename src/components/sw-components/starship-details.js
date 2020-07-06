import React from 'react'
import ItemDetails, {Record} from '../item-details/item-details'
import {SwapiServicesConsumer} from '../swapi-services-context/swapi-services-context'
import WithSwapiService from '../with-swapi-service/with-swapi-service'

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

export default WithSwapiService(StarshipDetails)