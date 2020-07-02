import { Component } from "react";

import React from 'react'


export default class ErrorBtn extends Component{
    state = {
        hasError: false
    }

    render(){

        if(this.state.hasError){
            this.foo.bar = 0
        }
        return (
            <button className = 'btn btn-danger' onClick = {() => this.setState({hasError:true})}></button>
        )
    }
}