import React from 'react'
import {Redirect} from 'react-router-dom'

const LoginPage = ({onLogin, isLogged}) => {

    if(isLogged){
       return <Redirect to = '/people'/>
    }

    return(
        <div className = 'jumbotron'>
            <p>Log in to see this page</p>
            <button onClick = {onLogin}  className = 'btn btn-primary'>LOGIN</button>
        </div>
    )
}

export default LoginPage