import React from 'react'
import {SwapiServicesConsumer} from '../swapi-services-context/swapi-services-context'


const withSwapiService = (mapMethodsToProps) => (Wrapped) =>{

    return (props) => {
        return (
          <SwapiServicesConsumer>
            {
              (swapiService) => {
                const serviceProps = mapMethodsToProps(swapiService);
    
                return (
                  <Wrapped {...props} {...serviceProps} />
                );
              }
            }
          </SwapiServicesConsumer>
        );
      }
    
}

export default withSwapiService