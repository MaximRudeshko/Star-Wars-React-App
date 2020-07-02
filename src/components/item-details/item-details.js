import React, { Component } from 'react'

import './person-details.css'
import SwapiService from '../../services/swapi-service'
import Spinner from '../spinner/spinner'
import ErrorBtn from '../error-btn/error-btn'

const Record = ({item, field, label}) => {

    return(
        <li className = 'list-group-item'>
            <span className = 'term'>{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export {Record}

export default class ItemDetails extends Component{
    swapiService = new SwapiService()

    state = {
        item: null,
        loading: false,
        startMessage: true,
        image:null
    }

    componentDidMount(){
        this.updatePerson()
    }

    componentDidUpdate(prevProps){
        if(this.props.itemId !== prevProps.itemId){   
            this.setState({
                startMessage:false,
                loading:true,
                item:null
            })
                     
            this.updatePerson()
        }
    }

    updatePerson(){
        const {itemId, getData,getImage} = this.props

        if(!itemId){
            return 
        }
        this.loading = false
        
        getData(itemId)
            .then(item => {
                this.setState({
                    item,
                    startMessage : false,
                    image:getImage(item)
                })
                
            })
        }

    render(){

        console.log()
        if(this.state.startMessage){
            return <span className = 'choose-character'>Choose you favorite character</span>
        } 

        if(!this.state.item){
            return <Spinner/>
        }

        const {item} = this.state

        const {name} = this.state.item
            return(
                <div className = 'person-details card d-flex'>
                    <img className = 'person-image'
                         alt = {name} 
                         src = {this.state.image}/>
                    <div className = 'card-body'>
                        <h4 className = 'person-name'>{name}</h4>
                        <ul className = 'list-group list-group-flush'>
                            
                            {React.Children.map(this.props.children, child => {
                                return React.cloneElement(child, {item})
                            })}
                        </ul>
                    </div>
                    <ErrorBtn/>
                </div>
        )        
    }        
}