import React from 'react'
import ItemDetails, {Record} from '../item-details/item-details'
import withSwapiService from '../with-swapi-service/with-swapi-service'

const PersonDetails = (props) => {
        return(
            <ItemDetails {...props}>
                <Record field = 'model' label = '1'/>
                <Record field = 'manufacturer' label = '2'/>
                <Record field = 'costInCredits' label = '3'/>
            </ItemDetails>
        )

}

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImage: swapiService.getPersonImage
    }
}

export default withSwapiService(PersonDetails, mapMethodsToProps)