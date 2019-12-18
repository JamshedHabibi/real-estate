import React, { Component } from 'react'
import {Consumer} from '../Context'
import Properties from './Properties'
import styled from 'styled-components'
import PropertyPageNo from './PropertyPageNo'
import PropertyPageFilter from './AdvancedSearch/PropertyPageFilter'

export default class PropertyPage extends Component {
    render() {
        return (
            <PropertyPageStyle>
    `           <div className='filter-bar'>
                    <PropertyPageFilter  />
                </div>
                <Consumer>
                    {value => {
                        return value.filteredProperties.length === 0 ?
                        <h3 className='result-count pt-4'>Results: {value.properties.length}</h3> :
                        <h3 className='result-count pt-4'>Results: {value.filteredProperties.length}</h3>
                    }}
                </Consumer>
                <Consumer>
                    {value => {
                       /* if (!value.apiIsLoaded) {
                            return <h1>Loading....</h1>*/
                        if (value.filteredProperties.length === 0) {
                                return (
                                    <div className='property-listings-section'>
                                    <div className='container'>
                                    {value.properties.map(property => {
                                        return <Properties key={property.lister_url} property={property}/>
                                    }    
                                    )}
                                    </div>
                                </div>    
                            )
                        } else if (value.filteredProperties.length > 0) {
                            console.log(value.filteredProperties)
                            return (
                                <div className='property-listings-section'>
                                    <div className='container'>
                                    {value.filteredProperties.map(property => {
                                        return <Properties key={property.lister_url} property={property}/>
                                    }    
                                    )}
                                    </div>
                                </div>    
                            )
                        } 
                    }}
                </Consumer>
                <div className='property-pages'>
                    <PropertyPageNo />
                </div>

                
            </PropertyPageStyle>
        )
    }
}

const PropertyPageStyle = styled.div`
position: relative;
top: -7.2vh;
background: var(--mainWhite);
padding-top: 20vh;

.result-count {
    position: relative;
    left: 13vw;
}

.filter-bar {
    position: sticky;
    z-index: 1;
    top: 16vh;
    width: 100vw;
}

.property-listings-section {
    position: relative;
    top: 5vh;
}

.property-pages {
    position: relative;
    top: 10vh;
}
`


