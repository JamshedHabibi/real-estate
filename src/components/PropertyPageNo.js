import React, { Component } from 'react'
import styled from 'styled-components'
import { Consumer } from '../Context'

export default class PropertyPageNo extends Component {
    render() {
        return (
            <div className='container'>
                <Consumer className='row'>
                    {value => {
                        const {setCurrentPage, propertyPageNo} = value;
                        return (
                        <Numbers className='py-3'>
                            <li>Previous</li>
                        {propertyPageNo.map(page => {
                            return (
                                <li id='page-number' key={page} onClick={setCurrentPage}>{page}</li>
                            )
                        })
                        }
                        <li>Next</li>
                        </Numbers>
                        )
                    }}
                </Consumer>
            </div>
        )
    }
}

const Numbers = styled.ul`
display: flex;
justify-content: space-around;
list-style: none;
position: relative;
left: -2vw;
li {
    cursor: pointer;
}
`