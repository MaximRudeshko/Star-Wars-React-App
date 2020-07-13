import React from 'react'
import ItemDetails, {Record} from '../item-details/item-details'
import WithSwapiService from '../with-swapi-service/with-swapi-service'

const PlanetDetails = (props) => {
    return(
        <ItemDetails {...props}>
            <Record field = 'name' label = 'Name'/>
            <Record field = 'population' label = 'Population'/>
            <Record field = 'rotationPeriod' label = 'Rotation Period'/>
        </ItemDetails>
    )
}

const mapMethodsToProps = (swapiService) => {
    return{
        getData: swapiService.getPlanet,
        getImage: swapiService.getPlanetImage
    }
}

export default WithSwapiService(mapMethodsToProps)(PlanetDetails)