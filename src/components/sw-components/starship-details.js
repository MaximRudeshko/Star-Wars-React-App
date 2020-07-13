import React from 'react'
import ItemDetails, {Record} from '../item-details/item-details'
import WithSwapiService from '../with-swapi-service/with-swapi-service'

const StarshipDetails = (props) => {
    return(
            <ItemDetails {...props}>
                <Record field = 'model' label = 'Model'/>
                <Record field = 'manufacturer' label = 'Manafacturer'/>
                <Record field = 'costInCredits' label = 'Cost In Credits'/>
            </ItemDetails>
            )
        
}

const mapMethodsToProps = (swapiService) => {
    return{
        getData: swapiService.getStarship,
        getImage: swapiService.getStarshipImage
    }
}

export default WithSwapiService(mapMethodsToProps)(StarshipDetails)


