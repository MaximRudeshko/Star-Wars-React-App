import React, {Component} from 'react'
import ItemList from '../item-list/item-list'
import PlanetDetails from '../planet-details/planet-details'
import SwapiService from '../../services/swapi-service'


export default class PlanetPage extends Component{




    render(){
        return(
            <div>
                <ItemList getData = {this.swapiService.getAllPlanet}/>
                <PlanetDetails/>            
            </div>
        )

    }
}