import React, { Component } from 'react'

import './header.css'

export default class Header extends Component{
    render(){
        return(
            <header className = 'header d-flex col-7 justify-content-between'>
                <h3 className = 'header__logo col-4'>Star DB</h3>
                <nav className = 'header__nav col-6 d-flex justify-content-between align-items-center'>
                    <a href = 'google.com' className = 'header-nav__link'> People</a>
                    <a href = 'google.com' className = 'header-nav__link'>Planets</a>
                    <a href = 'google.com' className = 'header-nav__link'>Starships</a>
                </nav>
                <button
                    className = 'btn btn-primary'
                    onClick = {this.props.onServiceChange}>Change service</button>
            </header>
        )
    }
}