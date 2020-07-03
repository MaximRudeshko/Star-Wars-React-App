import React from 'react'
import WithData from '../with-data/with-data'
import ItemList from '../item-list/item-list'
import SwapiService from '../../services/swapi-service'


const swapiService = new SwapiService()

const {
    getAllPeople,
    getAllPlanet,
    getAllStarships
} = swapiService;


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


const PersonList = WithData(ListWithChildren, getAllPeople)   
const PlanetList = WithData(ListWithChildren, getAllPlanet)
const StarshipList = WithData(ListWithChildren, getAllStarships)

export {
    PersonList,
    PlanetList,
    StarshipList
}