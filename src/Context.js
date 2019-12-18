import React, { Component } from 'react'
import {selectBoxOptionsData} from './data'

const Context = React.createContext();

class Provider extends Component {
    state = {
        navbarActivated: false,
        moreOptionsActivated: true,
        selectBox: [],
        selectBoxValues: [],
        apiIsLoaded: false,
        properties: [],
        listings: [],
        filteredProperties: [],
        propertyPageNo: [],
        currentPage: 1,
        filterBarActivated: false,
        minPrice: 0,
        maxPrice: 1000000,
        minBed: 0,
        maxBed: 99,
        propertyType: 'all',
        keywords: [],
    }

    componentDidMount() {
        this.getSelectBoxOptions();
        fetch("/api?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=buy&place_name=london&price_max=650000&bedroom_max=4&number_of_results=50&sort=newest")
            .then(res => res.json())
            .then(json => {
                this.setState({apiIsLoaded: true, properties: json, listings: json.response.listings})
            })
            .then(() => {
               return !this.state.apiIsLoaded ? null : this.setTotalPages();
            })
            .then(() => {
                return !this.state.apiIsLoaded ? null : this.splitListingKeywords();
             })
    }

    splitListingKeywords = () => {
        let propertyListings = this.state.properties.response.listings;
            for (let i=0; i<propertyListings.length; i++) {
                    let splitKeywords = propertyListings[i].keywords.split(", ");
                    splitKeywords.push('');
                    propertyListings[i].new_keywords = splitKeywords;
            }            
    }

    propertyFilter = (apiListings, tempArr) => {
        for (let i=0; i<apiListings.length;i++) {
            if (apiListings[i].property_type === this.state.propertyType && apiListings[i].price >= this.state.minPrice && tempArr.indexOf(apiListings[i]) === -1 
            && apiListings[i].price <= this.state.maxPrice && apiListings[i].bedroom_number <= this.state.maxBed 
            && apiListings[i].bedroom_number >= this.state.minBed) {
                tempArr.push(apiListings[i])
                this.setState({filteredProperties: tempArr})
            } else if (this.state.propertyType === 'all' && apiListings[i].price >= this.state.minPrice && tempArr.indexOf(apiListings[i]) === -1 
            && apiListings[i].price <= this.state.maxPrice && apiListings[i].bedroom_number <= this.state.maxBed 
            && apiListings[i].bedroom_number >= this.state.minBed) {
                tempArr.push(apiListings[i])
                this.setState({filteredProperties: tempArr})
            } else if (tempArr.indexOf(apiListings[i]) > -1) {
                this.setState({filteredProperties: tempArr})
            } 
    }
    }

    searchBoxFilter = (apiListings, tempArr) => {
        apiListings = this.state.properties.response.listings;
        let searchCriteria = document.getElementsByClassName('searchbox')[0].value.replace(/\w\S*/g, c => c.charAt(0).toUpperCase() + c.substr(1).toLowerCase()).split(" ");
        let propertyFiltered = [...this.state.filteredProperties];
        tempArr = propertyFiltered.filter(prop => prop.new_keywords.indexOf(searchCriteria) > -1);
        this.setState({keywords: searchCriteria}, () => {
            for (let j=0;j<searchCriteria.length;j++) {
                for (let i=0; i<apiListings.length; i++) {
                    if (apiListings[i].new_keywords.indexOf(searchCriteria[j]) > -1 && apiListings[i].property_type === this.state.propertyType && apiListings[i].price >= this.state.minPrice && tempArr.indexOf(apiListings[i]) === -1 
                    && apiListings[i].price <= this.state.maxPrice && apiListings[i].bedroom_number <= this.state.maxBed 
                    && apiListings[i].bedroom_number >= this.state.minBed) {
                        tempArr.push(apiListings[i]);
                        this.setState({filteredProperties: tempArr}, () => console.log(this.state.filteredProperties));
                    } else if (apiListings[i].new_keywords.indexOf(searchCriteria[j]) > -1 && this.state.propertyType === 'all' && apiListings[i].price >= this.state.minPrice && tempArr.indexOf(apiListings[i]) === -1 
                    && apiListings[i].price <= this.state.maxPrice && apiListings[i].bedroom_number <= this.state.maxBed 
                    && apiListings[i].bedroom_number >= this.state.minBed) {
                        tempArr.push(apiListings[i]);
                        this.setState({filteredProperties: tempArr}, () => console.log(this.state.filteredProperties));
                    } else if (apiListings[i].new_keywords.indexOf(searchCriteria[i]) === -1) {
                        this.setState({filteredProperties: tempArr});
                    }
                }
                }
            })
        }      
        

    propertyTypeFilter = () => {
        let apiListings = this.state.properties.response.listings;
        let property = document.getElementById('property-type-box').value.toLowerCase();
        let propertyFiltered = [...this.state.filteredProperties];
        let tempArr = propertyFiltered.filter(prop => prop.property_type === property);
        this.setState({propertyType: property }, () => {
            this.propertyFilter(apiListings, tempArr)
    })
    }

    minBedFilter = () => {
        let apiListings = this.state.properties.response.listings;
        let minBedNo = document.getElementById('min-bed-box').value;
        let propertyFiltered = [...this.state.filteredProperties];
        let tempArr = propertyFiltered.filter(prop => prop.bedroom_number >= minBedNo);
        this.setState({minBed: minBedNo }, () => {
            this.propertyFilter(apiListings, tempArr);
    })
    }

    maxBedFilter = () => {
        let apiListings = this.state.properties.response.listings;
        let maxBedNo = document.getElementById('max-bed-box').value;
        let propertyFiltered = [...this.state.filteredProperties];
        let tempArr = propertyFiltered.filter(prop => prop.bedroom_number <= maxBedNo);
        this.setState({maxBed: maxBedNo }, () => {
            this.propertyFilter(apiListings, tempArr);
    })
    }

    minPriceFilter = () => {
        let apiListings = this.state.properties.response.listings;
        let price = document.getElementById('min-price-box').value;
        let propertyFiltered = [...this.state.filteredProperties];
        let tempArr = propertyFiltered.filter(prop => prop.price >= price);
        this.setState({minPrice: price }, () => {
            this.propertyFilter(apiListings, tempArr);
    })
    }
    
    maxPriceFilter = () => {
        let apiListings = this.state.properties.response.listings;
        let price = document.getElementById('max-price-box').value;
        let propertyFiltered = [...this.state.filteredProperties];
        let tempArr = propertyFiltered.filter(prop => prop.price <= price);
        this.setState({maxPrice: price }, () => {
            this.propertyFilter(apiListings, tempArr);
    })
    }

    activateFilterBar = () => {
        const currentSetting = this.state.filterBarActivated;
        const btn = document.getElementById('filterer');
        if (this.state.filterBarActivated === false) {
            btn.style.left = '2vw';
        } else {
            btn.style.left = '120vw';
        }
        this.setState({filterBarActivated: !currentSetting})
    }

    setCurrentPage = () => {
        let pageNo = document.getElementById('page-number').innerHTML;
        this.setState({currentPage: pageNo})
        console.log(this.state.currentPage);
    }

    setTotalPages = () => {
        let tempArr=[];
        let tempTotalPages = Math.ceil(this.state.properties.response.listings.length/7);
        for (let i=1;i<=tempTotalPages;i++) {
            tempArr.push(i)
        }
        this.setState({propertyPageNo: tempArr}) 
    }

    getSelectBoxOptions = () => {
        let tempOptions = [];
        selectBoxOptionsData.forEach(option => {
            let tempOption = {...option};
            tempOptions = [...tempOptions, tempOption];
        })
        this.setState({selectBox: tempOptions})
    }

    moreOptions = () => {
        const currentSetting = this.state.moreOptionsActivated;
        this.setState({moreOptionsActivated: !currentSetting})
    }

    activateNavbar = () => {
        const tempActivated = this.state.navbarActivated;
        const navLinks = document.getElementById('nav-items');
        this.setState({navbarActivated: !tempActivated})

            if (this.state.navbarActivated === true) {
                navLinks.style.left = '100%';
            } else {
                navLinks.style.left = '0%';
            }
        }

    render() {
        return (
            <Context.Provider
                value={{
                    ...this.state,
                    activateNavbar: this.activateNavbar,
                    moreOptions: this.moreOptions,
                    getSelectBoxOptions: this.getSelectBoxOptions,
                    activateFilterBar: this.activateFilterBar,
                    setCurrentPage: this.setCurrentPage,
                    propertyFilter: this.propertyFilter,
                    minPriceFilter: this.minPriceFilter,
                    maxPriceFilter: this.maxPriceFilter,
                    minBedFilter: this.minBedFilter,
                    maxBedFilter: this.maxBedFilter,
                    propertyTypeFilter: this.propertyTypeFilter,
                    searchBoxFilter: this.searchBoxFilter,
                }}>
                
                {this.props.children}
            </Context.Provider>
        )
    }
}

const Consumer = Context.Consumer;

export {Provider, Consumer};

