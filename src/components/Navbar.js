import React, { Component } from 'react'
import styled from 'styled-components'
import { Consumer } from '../Context'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
    render() {   
        return (
            <React.Fragment>
                <Nav>
                    <NavBarIcon className='text-center'>
                            <img 
                            className='real-estate-icon' 
                            height='65px' 
                            src='iconmonstr2.png' 
                            alt=''/>
                            <p className='real-estate'>REAL ESTATES</p>
                            <p className='est'>est. 1997</p>
                    </NavBarIcon>
                    <NavItems id='nav-items' className='nav-items text-center'>
                        <Link style={{'textDecoration': 'none'}} to='/'>
                            <li className='nav-li'>HOME</li>
                        </Link>
                        <Link style={{'textDecoration': 'none'}} to='/properties'>
                            <li className='nav-li'>SALES</li>
                        </Link>
                        <li className='nav-li pr-md-5 mr-md-5'>LETTINGS</li>  
                        <li className='nav-li pl-md-5 ml-md-5'>NEW BUILDS</li>
                        <li className='nav-li'>AREAS</li>
                        <li className='nav-li'>CONTACT</li>
                    </NavItems>
                    <Consumer>
                        {value => {
                            const {navbarActivated} = value;
                            if (navbarActivated === true) {
                                return (
                                    <NavBtn onClick={value.activateNavbar}>
                                        <i className="fas fa-times"></i>
                                    </NavBtn>
                                )
                            } else {
                                return (
                                    <NavBtn onClick={value.activateNavbar}>
                                        <i className="fas fa-bars"></i>
                                    </NavBtn>
                                )
                            }
                        }}
                    </Consumer>
                </Nav>                
            </React.Fragment>
        )
    }
}

const NavBtn = styled.div`
position: absolute;
right: -100%;
top: 30%;
font-size: 1.5em;
cursor: pointer;

@media (max-width: 768px) {
    position: absolute;
    right: 6%;
}
`

const Nav = styled.div`
background: var(--mainPurple);
height: 16vh;
color: white;
width: 100vw !important;
position: fixed;
top: 0vh;
font-size: 1.1em;
letter-spacing: 0.1em;
z-index: 2;
`

const NavItems = styled.ul`
display: flex;
justify-content: space-around;
list-style: none;
position: relative;
top: -8vh;
padding-left: 2vw;
padding-right: 2vw;
background: rgb(104, 73, 74);
left: 0;
transition: left 0.3s ease-in-out;

.nav-li {
    transition: color 0.2s ease-in-out;
    color: rgb(240, 240, 240);
    position: relative;
    top: -1.5vh;
    &:hover {
        color: rgb(203, 160, 162);
        cursor: pointer;
    }
}

@media (max-width: 1200px) {
    padding-left: 0;
    padding-right: 0;

    .nav-li {
        font-size: 0.8em;
    }
}

@media (max-width: 768px) {
    position: relative;
    top: -3.2vh;
    left: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    color: black;
    background: rgb(104, 73, 74);
    padding-bottom: 55px;
    .nav-li {
        position: relative;
        top: 4vh;
        margin-bottom: 10vh;
    }
  }
`

const NavBarIcon = styled.div`
position: relative;
top: 0vh;
left: 50%;
transform: translateX(-70%);
width: 15vw;
z-index: 1;

@media (max-width: 768px) {
    position: relative;
    left: 35%;
    top: 2vh;
    width: 40vw;

    .real-estate-icon {
        height: 50px;
    }
}

.real-estate-icon {
    position: relative;
}

.real-estate {
    font-size: 1.5em;
    letter-spacing: 0.2em;
    position: relative;
    top: -1.3vh;
    color: black;
    white-space: nowrap;
    font-family: 'Crimson Text', serif;

    @media (max-width: 1200px) {
        font-size: 1.2em;
    }

    @media (max-width: 768px) {
        font-size: 1em;
        
    }
}

.est {
    position: relative;
    bottom: 4vh;
    font-size: 0.7em;
    color: black;
}

`