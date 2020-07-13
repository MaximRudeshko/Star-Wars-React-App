import React from 'react'

import './item-list.css'
import propTypes, {arrayOf} from 'prop-types'

const ItemList = (props) => {

    const {data, onItemSelected, children:renderItem} = props
    const items = data.map(item => {
        const {id} = item
        const label = renderItem(item) 

        return (
            <li className = 'list-group-item' 
            key = {id}
            onClick = {() => {
                onItemSelected(id)
                console.log(item)
            }}>
                {label}
            </li>
        )
    })

    return(
        <ul className = 'item-list list-group'>
            {items}
        </ul>   
    )   
}

ItemList.defaultProps = {
    onItemSelected: () => {}
}

ItemList.propTypes = {
    data: arrayOf(propTypes.object).isRequired,
    onItemSelected: propTypes.func
}

export default ItemList

