import React from 'react'
import propTypes from 'prop-types'

const Row = ({left,right}) => {
    return(
        <div className = 'row'>
            <div className ='col-6'>
                {left}
            </div>
            <div className ='col-6'>
                {right}
            </div>
        </div>
    )
}

Row.propTypes = {
    left: propTypes.node.isRequired,
    right: propTypes.node.isRequired
}

export default Row