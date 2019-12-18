import React, { Component } from 'react'
import styled from 'styled-components'
import { Consumer } from '../Context'
import MoreOptions from './AdvancedSearch/MoreOptions'
import './HomePage.css'
import {SearchButton} from './Styles'
import {Link} from 'react-router-dom'

export default class HomePage extends Component {
    render() {
        return (
            <div className='home-page'>
                <BackgroundImg>
                    <img className='backgroundimg' width='1800' src='background2.jpg' alt=''/>
                </BackgroundImg>
                <SearchPanel>
                    <form className='searchpanel-form'>
                        <h4 className='searchbox-heading mb-4'>FIND YOUR NEW HOME</h4>
                        <div className='sale-or-lettings'>
                            <p>
                                <span className='searchbox-sale'>SALES</span>
                                <span className='searchbox-lettings'>LETTINGS</span>
                            </p>
                        </div>
                        <Consumer>
                            {value => {
                                /*if (!value.apiIsLoaded) {
                                    return <React.Fragment></React.Fragment>
                                } else {*/
                                    return (
                                        <div>
                                            <input id='homepage-searchbox' className='searchbox' type='text' placeholder='Search for Garden, Balcony, Kitchen etc...'/>
                                            <Link to='/properties' style={{'textDecoration': 'none'}}>
                                                <SearchButton className='homepage-search-btn mt-3' type='submit' 
                                                onClick={(apiListings, tempArr) => {
                                                    value.searchBoxFilter(apiListings, tempArr); 
                                                    value.propertyFilter(apiListings, tempArr)
                                                }}>
                                                    <p className='searchBtn-text'>SEARCH</p>
                                                </SearchButton>
                                            </Link>
                                        </div>
                                )
                            
                            }}
                        </Consumer>
                        
                        <div>
                        <Consumer className='advanced-search-dropdown'>
                            {value => {
                                if (value.moreOptionsActivated === false) {
                                    return <p className='advanced-search' onClick={value.moreOptions}>Advanced Search<i className="ml-2 fas fa-sort-down"></i></p>
                                } else {
                                    return (
                                        <div>
                                        <p className='advanced-search' onClick={value.moreOptions}>Advanced Search<i className="ml-2 fas fa-sort-up"></i></p>
                                        <MoreOptions/>
                                    </div>
                                    )
                                }
                            }}
                        
                        </Consumer>
                        </div>
                        
                    </form>
                    <a className='nestoria-logo' href="https://www.nestoria.co.uk"><img src="https://resources.nestimg.com/nestoria/img/pbr_v1.png" alt="powered by nestoria.co.uk" width="200" height="22" /></a>
                </SearchPanel>
            </div>
        )
    }
}



const SearchPanel = styled.div`

position: relative;
bottom: 70vh;
left: 50%;
transform: translateX(-50%);
color: rgb(45,45,45);
background: white;
padding: 2vw 0vw 8vh 4vw;
width: 60vw;
box-shadow: 5px 5px 3px rgb(104, 89, 89, 0.7), 5px 5px 3px rgb(104, 89, 89, 0.7);

.advanced-search-dropdown {
    transition: all 0.3s ease-in-out;
    position: relative;
    top: -25vh;
}

@media (max-width: 1145px) {
    padding: 2vw 5vw 8vh 5vw;
}

.searchbox-heading {
    font-size: 1.3em;
    letter-spacing: 0.04em;
    font-family: 'Josefin Sans', sans-serif;
}

.searchbox-sale {
    border: 1px solid rgb(104, 73, 74, 0.7);
    padding: 8px 10px 8px 10px;
    background: rgb(104, 73, 74, 0.7);
    color: rgb(240,240,240);
    cursor: pointer;
    font-size: 0.9em;
    font-family: 'Josefin Sans', sans-serif;
}

.searchbox-lettings {
    border: 1px solid rgb(135, 89, 89);
    padding: 8px 10px 8px 10px;
    background: rgb(135, 89, 89);
    color: rgb(240,240,240);
    cursor: pointer;
    font-size: 0.9em;
    font-family: 'Josefin Sans', sans-serif;
}

.searchbox {
    height: 40px;
    position: relative;
    top: -3.6vh;
    width: 650px;

    @media (max-width: 1500px) {
        width: 400px;
    }
}

.homepage-search-btn {
    position: relative;
    top: -3.9vh;
}
.searchBtn-text {
    font-family: 'Josefin Sans', sans-serif;
}

.advanced-search {
    position: relative;
    top: -3vh;
    cursor: pointer;
}

@media (max-width: 1007px) {
    bottom: 80vh;
    .searchbox {
        top: -1.3vh;
        height: 41px;
    }

    .advanced-search {
        left: 28vw;
        top: -7.7vh;
    }
}
@media (max-width: 800px) {

    .searchbox-heading {
       text-align: center;
       padding-top: 20px;
    }
    .searchbox {
        width: 300px;
    }
    .advanced-search {
        left: 20vw;
    }
}

@media (max-width: 594px) {
    top: -82vh;
    padding: 2vw 8vw 10vh 8vw;
    width: 400px;

    .searchbox {
        width: 300px;
        justify-content: center;
    }
    .advanced-search {
        left: 23vw;
        top: -8vh;
    }
}

@media (max-width: 468px) {
    width: 300px;

    .searchbox {
        width: 230px;
    }
}
`

const BackgroundImg = styled.div`
@media (max-width: 768px) {
    .backgroundimg {
        width: 1700px;
        position: relative;
        right: 100vw;
    }
}

@media (max-width: 679px) {
    .backgroundimg {
        width: 1700px;
        position: relative;
        right: 130vw;
    }
}
`

