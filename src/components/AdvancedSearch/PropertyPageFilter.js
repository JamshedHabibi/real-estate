import React, { Component } from 'react'
import styled from 'styled-components'
import { Consumer } from '../../Context'
import PropertyPageSelectBoxes from './PropertyPageSelectBoxes'
import {Link} from 'react-router-dom'

export default class PropertyPageFilter extends Component {
    render() {
        return (
            <Filter>
                <FilterNavbar className='container-fluid'>
                    <div className='row'>
                            <input className='searchbox' type='text' placeholder='Search for Garden, Balcony etc...'/>
                            <Consumer>
                                {value => {
                                    return (
                                        <Link style={{'textDecoration': 'none'}} to='/properties'>
                                        <div className='submit-button' type='submit' onClick={(apiListings, tempArr) => {
                                            value.searchBoxFilter(apiListings, tempArr); 
                                            value.propertyFilter(apiListings, tempArr);
                                        }}>
                                            <p className='submit-button-text'>SEARCH</p>
                                        </div>
                                        </Link>
                                    )
                                }}
                            </Consumer>
                            
                            <div id='filterer' className='row'>
                                <Consumer>
                                    {context => {
                                        return context.selectBox.map(option => {
                                            return (
                                                    <PropertyPageSelectBoxes 
                                                    key={option.id} 
                                                    option={option} 
                                                    value={option.value} 
                                                    />
                                                )
                                            })
                                        }}    
                                </Consumer>   
                            </div>
                    </div>

                </FilterNavbar>
                <Consumer>
                    {value => {
                      return (
                        !value.filterBarActivated ? 
                            <h5 onClick={value.activateFilterBar} className='filter-btn'>Filters<i className="ml-2 fas fa-sort-down"></i></h5>
                        :
                        <h5 onClick={value.activateFilterBar} className='filter-btn'>Filters<i className="ml-2 fas fa-sort-up"></i></h5>
                      )
                    }}
                </Consumer>
                      
            </Filter>
        )
    }
}

const Filter = styled.div`
.filter-btn {
    position: relative;
    left: 100vw;
    cursor: pointer;
    @media(max-width: 1300px) {
        left: 73vw;
        top: -6vh;
    }
`
const FilterNavbar = styled.div`
position: sticky;
top: -16vh;
width: 100vw;
height: 8vh;
background: white;

@media (max-width: 1300px) {
    background: var(--mainWhite);

    #filterer {
        position: relative;
        left: 120vw;
        top: 3vh;
    }
}


input {
    position: relative;
    left: 0vw;
    top: 1.5vh;
    height: 5vh;
    width: 20vw;
    padding-top: 1vh;
    padding-bottom: 1vh;
    padding-left: 1vw;
    padding-right: 3vw;
    border: 1px solid rgb(0,0,0,0);
    border-radius: 2px;

    @media (max-width: 1300px) {
        width: 40vw;
        left: 5vw;
    }
}

.submit-button {
    position: relative;
    left: 0vw;
    top: 1.5vh;
    border: 1px solid rgb(0,0,0,0);
    border-radius: 4px;
    background: var(--mainPurple);
    color: var(--mainWhite);
    height: 5vh;
    outline: none;
    cursor: pointer;

    @media (max-width: 1300px) {
        left: 5vw;
    }

    .submit-button-text {
        padding: 5px 15px 0px 15px;

    }

}
`