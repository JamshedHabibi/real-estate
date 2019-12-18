import React, { Component } from 'react'
import styled from 'styled-components'
import {Consumer} from '../../Context'

export default class PropertyPageSelectBoxes extends Component {
    getFirstBox = () => {
        const {id, value} = this.props.option;
        if (id === 1) {
            return (
                <Consumer>
                    {context => {
                        return (
                            <Options id='min-price-box' onChange={context.minPriceFilter} value={context.minPrice}>
                                {value.map(int => {
                                    return int === 0 ? 
                                    <option value={int} key={int}>Min Price</option> 
                                    :
                                    <option value={int*1000} key={int}>£{int}k</option>
                                })}   
                            </Options>
                        )
                    }}
                </Consumer>
            )
        } else if (id === 2) {
            return (
                <Consumer>
                    {context => {
                        return (
                            <Options id='min-bed-box' onChange={context.minBedFilter} value={context.minBed}>
                                {value.map(int => {
                                    return int === 0 ?<option value={int} key={int}>No Min</option> :
                                    <option value={int} key={int}>{int}</option>
                                })}   
                            </Options>  
                        )
                    }}
                </Consumer>
            )
        } else {
            return (
                <Consumer>
                    {context => {
                        return (
                            <Options id='property-type-box' onChange={context.propertyTypeFilter} defaultValue={context.propertyType}>
                                {value.map(int => {
                                    return <option value={int} key={int}>{int}</option> 
                                })}   
                            </Options>
                        )
                    }}
                    </Consumer>
            )
        }
    }
    
    getSecondBox = () => {
        const {id, title, value} = this.props.option;
        if (title === 'Property Type') {
            return <React.Fragment></React.Fragment>
        } else if (id !== 1) {
            return (
                <Consumer>
                    {context => {
                        return (
                            <Options id='max-bed-box' onChange={context.maxBedFilter} value={context.maxBed}>
                                {value.map(int => {
                                    return int === 0 ? <option value={99} key={int}>No Max</option> :
                                    <option value={int} key={int}>{int}</option>
                                })}   
                            </Options>
                        )
                }}   
            </Consumer>
            )
        } else {
            return (
                <Consumer>
                    {context => {
                        return (
                            <Options id='max-price-box' value={context.maxPrice} onChange={context.maxPriceFilter}>
                                {value.map(int => {
                                    return int === 0 ? 
                                    <option value={100000000} key={int}>Max Price</option> 
                                    :
                                    <option value={int*1000} key={int}>£{int}k</option>
                                })}   
                            </Options>
                        )
                        }}
                </Consumer>
            )
        }
    }
        render() {
            const {title} = this.props.option;
                return (
                    <FilterNavSelectBoxes>
                            <span className='filter-box-title mr-3'>{title}</span>
                            <span className='box-choices mr-3'>{this.getFirstBox()}
                                <span>{this.getSecondBox()}</span>
                            </span>
                    </FilterNavSelectBoxes>
                )
            }   
}

    const FilterNavSelectBoxes = styled.div`
    position: relative;
    left: 2vw;
    top: 1.5vh;


    @media (max-width: 1300px) {
            position: relative;
            top: 0vh;
            flex-direction: column;
            width: 100vw;
            height: 7vh;
            background: var(--mainWhite);

            .filter-box-title {
                position: relative;
                align-text: center;
            }

            .box-choices {
                position: relative;
                top: 0vh;
                margin-bottom: 0vh;
            }

    }

    
    `
    
    const Options = styled.select`
    padding: 5px 10px 5px 5px;
    margin-right: 15px;
    `