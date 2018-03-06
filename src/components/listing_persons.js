import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getListingData } from '../actions/get-data';
import { emptyList } from '../actions/empty-list';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

class ListingPersons extends Component {

    componentWillMount(){
        this.props.getListingData();
    }

    componentDidMount(){
        this.props.emptyList();
    }

    handleDelete(id){
        axios.delete(`https://reqres.in/api/users/${id}`)
            .then(response => {
                console.log('delete response ',response);
                this.props.history.push('/');
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleAddUser(){
        this.props.history.push('/0');
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
                    <button onClick={() => this.handleDelete()}>Delete</button>
                </div>
            )
        })

        return(
            <div>
                <div>
                    <button onClick={()=>this.handleAddUser()}>Add User</button>
                </div>
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

export default connect(mapStateToProps, {getListingData, emptyList})(withRouter(ListingPersons));
