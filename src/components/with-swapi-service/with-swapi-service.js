import React from 'react'
import {SwapiServicesConsumer} from '../swapi-services-context/swapi-services-context'


const WithSwapiService = (Wrapped) => {

    return (props) => {
        return (
            <SwapiServicesConsumer>
                {(swapiService) => {
                    return (
                        <Wrapped {...props} swapiService = {swapiService}/>
                    )
                }}
            </SwapiServicesConsumer>
        )
    }
    
}

export default WithSwapiService