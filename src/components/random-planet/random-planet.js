import React, { Component } from 'react'

import SwapiService from '../../services/swapi-service'

import './random-planet.css'
import Spinner from '../spinner/spinner'

export default class RandomPlanet extends Component{


    swapiservice = new SwapiService()

    state = {
        planet:{},
        loading:true
    }
    constructor(){
        super();
        this.updatePlanet()
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        })
    }

    updatePlanet(){
        const id = Math.floor((Math.random() * 25) + 2)
        this.swapiservice
            .getPlanet(id)
            .then(planet => {
                this.onPlanetLoaded(planet) 
            })
    }

    render(){

        const {planet, loading} = this.state

        const content = loading ? <Spinner/> : <PlanetView planet = {planet}/>
        

        return(
            <div className = 'random-planet jumbotron rounded d-flex '>
                {content}
            </div>
        )
    }
}


const PlanetView = ({planet}) => {

    const {id, name, population, rotationPeriod, diameter} = planet;

    return(
        <React.Fragment>
            <img className = 'planet-image'
                     alt = {name}
                     src = {`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
                <div>
                    <h4 className = 'planet-name'>{name}</h4>
                    <ul className ='list-group list-group-flush'>
                        <li className = 'list-group-item'>
                            <span className = 'term'>Population</span>
                            <span>{population}</span>
                        </li>
                        <li className = 'list-group-item'>
                            <span className = 'term'>Rotation Period</span>
                            <span>{rotationPeriod}</span>
                        </li>
                        <li className = 'list-group-item'>
                            <span className = 'term'>Diameter</span>
                            <span>{diameter}</span>
                        </li>
                    </ul>
                </div>
        </React.Fragment>
    )
}