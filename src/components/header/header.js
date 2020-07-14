import React, { Component } from 'react'

import './header.css'
import { Link } from 'react-router-dom'

export default class Header extends Component{
    render(){
        return(
            <header className = 'header d-flex col-7 justify-content-between'>
                <h3 className = 'header__logo col-4'><Link to = '/'>Star DB</Link></h3>
                <nav className = 'header__nav col-6 d-flex justify-content-between align-items-center'>
                    <Link to = '/people' className = 'header-nav__link'> People</Link>
                    <Link to = '/planets' className = 'header-nav__link'>Planets</Link>
                    <Link to = '/starships' className = 'header-nav__link'>Starships</Link>
                </nav>
                <button
                    className = 'btn btn-primary'
                    onClick = {this.props.onServiceChange}>Change service</button>
            </header>
        )
    }
}