import React, { Component } from 'react'
import styled from 'styled-components'
import { Consumer } from '../../Context'
import SelectBox from './SelectBox'

export default class MoreOptions extends Component {
    render() {
        return (
                <AdvancedSearchForm className='container'>
                    <div className='row'>
                        <Consumer>
                            {context => {
                                return context.selectBox.map(option => {
                                    return <SelectBox 
                                                key={option.id} 
                                                option={option} 
                                                propertyValues={context.properties} 
                                            />
                                })
                            }}
                        </Consumer>
                    </div>
                </AdvancedSearchForm>
        )
    }
}

const AdvancedSearchForm = styled.div`
position: relative;
top: -3vh;
left: -1vw;

.price-range-heading {
color: rgb(150, 85, 85);
}
`

