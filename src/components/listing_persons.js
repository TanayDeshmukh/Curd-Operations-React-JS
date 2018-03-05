import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getListingData } from '../actions/get-data';
import { emptyList } from '../actions/empty-list';
import { Link } from 'react-router-dom';

class ListingPersons extends Component {

    componentWillMount(){
        this.props.getListingData();
    }

    componentDidMount(){
        this.props.emptyList();
    }

    render() {

        const {
            listingData,
            isFetching,
            errorData
        } = this.props;     

        if(isFetching){
            return <div>......Loading</div>
        } 
        
        if(errorData){
            return <div>{errorData}</div>
        }
        
        let dataBlocks = listingData.map((data) => {
            return(
                <div key={data.id}>
                    <Link to={`/${data.id}`}>
                        <div className='person' >
                            <img src={data.avatar} alt='person_image' className='avatar'/>
                            {data.first_name+' '+data.last_name}
                        </div>
                    </Link>
                </div>
            )
        })

        return(
            <div>
                <ul>
                    {dataBlocks}
                </ul>
            </div>
        );

    }
}

function mapStateToProps(state){
    const{
        listingStore: {
            listingData,
            isFetching,
            errorData
        }
    }=state;
    return{
        listingData,
        isFetching,
        errorData
    };
}

export default connect(mapStateToProps, {getListingData, emptyList})(ListingPersons);
