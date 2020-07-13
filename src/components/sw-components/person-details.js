import React from 'react'
import ItemDetails, {Record} from '../item-details/item-details'
import withSwapiService from '../with-swapi-service/with-swapi-service'

const PersonDetails = (props) => {
        return(
            <ItemDetails {...props}>
                <Record field = 'name' label = 'Name'/>
                <Record field = 'birthYear' label = 'Birth Year'/>
                <Record field = 'eyeColor' label = 'Eye Color'/>
            </ItemDetails>
        )

}

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImage: swapiService.getPersonImage
    }
}

export default withSwapiService(mapMethodsToProps)(PersonDetails)