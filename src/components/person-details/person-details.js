import React, { Component } from 'react'

import './person-details.css'
import SwapiService from '../../services/swapi-service'
import Spinner from '../spinner/spinner'

export default class PersonDetails extends Component{
    swapiService = new SwapiService()

    state = {
        person: null
    }

    componentDidMount(){
        this.updatePerson()
    }

    componentDidUpdate(prevProps){
        if(this.props.personId !== prevProps.personId){
            this.updatePerson()
        }
        
    }

    
    updatePerson(){
        const {personId} = this.props

        if(!personId){
             console.log(this.state + '0')
            return 
        }

        this.swapiService
            .getPerson(personId)
            .then(person => {
                this.setState({
                    person
                })
            })
        }


    render(){
        if(!this.state.person){
            return (
                <span className = 'choose-character'>Select you favorite character</span>
            )
        }

        const {id, name, gender, eyeColor, birthYear} = this.state.person

        return(
            <div className = 'person-details card d-flex'>
                <img className = 'person-image'
                     alt = {name} 
                     src = {`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}/>
                <div className = 'card-body'>
                    <h4 className = 'person-name'>{name}</h4>
                    <ul className = 'list-group list-group-flush'>
                        <li className = 'list-group-item'>
                            <span className = 'term'>Gender</span>
                            <span>{gender}</span>
                        </li>
                        <li className = 'list-group-item'>
                            <span className = 'term'>Birth Year</span>
                            <span>{birthYear}</span>
                        </li>
                        <li className = 'list-group-item'>
                            <span className = 'term'>Eye color</span>
                            <span>{eyeColor}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}