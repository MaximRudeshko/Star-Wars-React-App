import React, {Component} from 'react'
import ErrorBtn from '../error-btn/error-btn'


export default class PlanetDetails extends Component{

    state = {
        planet: null
    }


    updatePlanet(){

    }

    render(){
        return (
            <div className = 'person-details card d-flex'>
                    <img className = 'person-image'
                         alt = ''
                         src = {`https://starwars-visualguide.com/assets/img/characters/1.jpg`}/>
                    <div className = 'card-body'>
                        <h4 className = 'person-name'>1</h4>
                        <ul className = 'list-group list-group-flush'>
                            <li className = 'list-group-item'>
                                <span className = 'term'>Gender</span>
                                <span>1</span>
                            </li>
                            <li className = 'list-group-item'>
                                <span className = 'term'>Birth Year</span>
                                <span>1</span>
                            </li>
                            <li className = 'list-group-item'>
                                <span className = 'term'>Eye color</span>
                                <span>1</span>
                            </li>
                        </ul>
                    </div>
                    <ErrorBtn/>
                </div>
        )
    }
}