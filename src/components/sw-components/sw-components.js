import React from 'react'
import WithData from '../with-data/with-data'
import ItemList from '../item-list/item-list'
import withSwapiService from '../with-swapi-service/with-swapi-service'


const withChildFunction = (Wrapped, func) => {
    return(props) => {
        return (
            <Wrapped {...props}>
                {func}
            </Wrapped>
        )
    }

}

const ListWithChildren = withChildFunction(ItemList, ({name}) => <span>{name}</span>)

const mapPersonMethodsToProps = swapiService => {
    return {
        getData: swapiService.getAllPeople      
    }
}

const mapPlanetMethodsToProps = swapiService => {
    return {
        getData: swapiService.getAllPlanet
    }
}

const mapStarshipMethodsToProps = swapiService => {
    return {
        getData: swapiService.getAllStarships
    }
}
const PersonList = withSwapiService(mapPersonMethodsToProps)(WithData(ListWithChildren))  
const PlanetList = withSwapiService(mapPlanetMethodsToProps)(WithData(ListWithChildren))
const StarshipList = withSwapiService(mapStarshipMethodsToProps)(WithData(ListWithChildren))


export {
    PersonList,
    PlanetList,
    StarshipList
}