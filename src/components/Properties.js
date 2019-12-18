import React, { Component } from 'react'
import styled from 'styled-components'

export default class Properties extends Component {
    render() {
        const {lister_url, summary, thumb_url, img_url, price_formatted, bedroom_number, room_number, property_type, listing_type, title} = this.props.property;
        return (
            <PropertyContainer className='row mb-4'>
                    <ImgContainer className='col-12 col-md-5'>
                        <img  
                            alt='property thumbnail' 
                            src={img_url}
                            />
                        <PriceContainer>
                            <p className='price-text'>{price_formatted}</p> 
                        </PriceContainer>
                    </ImgContainer>

                    <TextContainer className='col-12 col-md-5'>
                        <h5 className='title'>{bedroom_number} bedroom {property_type} to {listing_type}</h5>
                        <h6>{title}</h6>
                        <p>
                            <strong>
                                <i className="fas fa-bed"></i><span className='ml-3'>{bedroom_number}</span>
                                <i className=" ml-5 fas fa-shower"></i><span className='ml-3'>{room_number}</span>
                            </strong>
                        </p>
                        <p>{summary}</p>
                        <img src={thumb_url} alt='property' />
                        <a href={lister_url} rel="noopener noreferrer" target='_blank'><h6 className='mt-2'>View Details</h6></a>
                        <div className='nestoria-logo py-3'>
                        <a target='_blank' rel="noopener noreferrer" href="https://www.nestoria.co.uk"><img src="https://resources.nestimg.com/nestoria/img/pbr_v1.png" alt="powered by nestoria.co.uk" width="200" height="22" /></a>
                        </div>
                    </TextContainer>
            </PropertyContainer>
        )
    }
}

const PropertyContainer = styled.div`
background: white;
border: 5px solid rgb(0,0,0,0);
box-shadow: 3px 3px 3px 3px, rgb(0,0,0,0.7);

@media (max-width: 768px) {
    width: 450px;
    position: relative;
    left: 5vw;
}
`

const ImgContainer = styled.div`
border-top-left-bottom: 5px;
border-top-right-bottom: 5px;
position: relative;
align-content: center;
img {
    border: 0.0001px solid rgb(0,0,0,0);
    
}


`
const PriceContainer = styled.div`
position: relative;
background: var(--mainPurple);
color: var(--mainWhite);
width: 400px;
font-size: 1.5em;
border: 0.001px solid rgb(0,0,0,0);
border-bottom-left-radius: 5px;
border-bottom-right-radius: 5px;

.price-text {
    padding: 10px 10px 10px 10px;
}

`

const TextContainer = styled.div`
text-align: justify;
position: relative;
.title {
    color: var(--mainPurple);
}

@media (max-width: 1200px) {
    left: 3vw;
}
@media (max-width: 991px) {
    left: 15vw;
}

@media (max-width: 768px) {
    left: 0vw;
}
`