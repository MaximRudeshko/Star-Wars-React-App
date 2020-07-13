import React, { Component } from 'react'

import SwapiService from '../../services/swapi-service'
import Spinner from '../spinner/spinner'
import ErrorIndicator from '../error-indicator/error-indicator'

import './random-planet.css'


export default class RandomPlanet extends Component{


    swapiservice = new SwapiService()

    

    state = {
        planet:{},
        loading:true,
        error: false
    }

    componentDidMount(){
        const {updateInterval} = this.props
        this.updatePlanet()
        this.interval = setInterval(this.updatePlanet, updateInterval)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    onPlanetLoaded = (planet) => {
        
        this.setState({
            planet,
            loading: false
        })
    }

    onError = (error) => {
        this.setState({
            loading:false,
            error: true
        })
    }

    updatePlanet = () => {
        const id = Math.floor((Math.random() * 17) + 2) 
        this.swapiservice
            .getPlanet(id)
            .then(planet => {
                this.onPlanetLoaded(planet) 
            })
            .catch(error => {
                this.onError(error)
            })
    }



    render(){
        const {planet, loading, error} = this.state

        const errorMessage = error ? <ErrorIndicator/> : null
        const spinner = loading ? <Spinner/> : null
        const content = !(loading || error) ? <PlanetView planet = {planet}/> : null
        

        return(
            <div className = 'random-planet jumbotron rounded d-flex '>
                {errorMessage}
                {spinner}
                {content}
            </div>
        )
    }
}

RandomPlanet.defaultProps = {
    updateInterval: 3000
}

RandomPlanet.propTypes = {
    updateInterval: (props, propName, componentName) => {
        const value = props[propName]

        if(value === 'number' && !isNaN(value)){
            return null
        }

        throw new TypeError(`${componentName}`)
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