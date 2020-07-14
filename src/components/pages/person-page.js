import React from 'react'
import {PersonList} from '../sw-components/sw-components'
import {withRouter} from 'react-router-dom'


const PersonPage = ({history}) => {
    return(
        <PersonList onItemSelected = {(itemId) => history.push(itemId)}/>  
    )
}

export default withRouter(PersonPage)
