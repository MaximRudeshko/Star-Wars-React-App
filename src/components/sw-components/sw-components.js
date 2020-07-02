import WithData from '../with-data/with-data'
import ItemList from '../item-list/item-list'
import SwapiService from '../../services/swapi-service'


const swapiService = new SwapiService()

const {
    getAllPeople,
    getAllPlanet,
    getAllStarships
} = swapiService;


const PersonList = WithData(ItemList, getAllPeople)    
const PlanetList = WithData(ItemList, getAllPlanet)
const StarshipList = WithData(ItemList, getAllStarships)

export {
    PersonList,
    PlanetList,
    StarshipList
}