import React from 'react'
import ItemDetails, {Record} from '../item-details/item-details'
import WithSwapiService from '../with-swapi-service/with-swapi-service'

const PlanetDetails = (props) => {
    return(
        <ItemDetails {...props}>
            <Record field = 'model' label = '1'/>
            <Record field = 'manufacturer' label = '2'/>
            <Record field = 'costInCredits' label = '3'/>
        </ItemDetails>
    )
}

const mapMethodsToProps = (swapiService) => {
    return{
        getData: swapiService.getPlanet,
        getImage: swapiService.getPlanetImage
    }
}

export default WithSwapiService(PlanetDetails, mapMethodsToProps)