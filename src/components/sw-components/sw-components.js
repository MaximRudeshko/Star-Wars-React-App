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

/* const renderName = ({name}  ) => <span>{name}</span>

const compose = (...func) => (comp) => {
    return func.reduceRight((prev, f) => f(prev), comp)
}



const PersonList = compose(
    withSwapiService(mapPersonMethodsToProps),
    WithData,
    withChildFunction(renderName),
)(ItemList)

const PlanetList = compose(
    withSwapiService(mapPlanetMethodsToProps),
    WithData,
    withChildFunction(renderName)
)(ItemList)

const StarshipList = compose(
    withSwapiService(mapStarshipMethodsToProps),
    WithData,
    withChildFunction(renderName)
)(ItemList) */


const PersonList = withSwapiService(mapPersonMethodsToProps)(WithData(withChildFunction(ItemList, ({name}) => <span>{name}</span>)))  
const PlanetList = withSwapiService(mapPlanetMethodsToProps)(WithData(withChildFunction(ItemList, ({name}) => <span>{name}</span>)))
const StarshipList = withSwapiService(mapStarshipMethodsToProps)(WithData(withChildFunction(ItemList, ({name}) => <span>{name}</span>)))


export {
    PersonList,
    PlanetList,
    StarshipList
}