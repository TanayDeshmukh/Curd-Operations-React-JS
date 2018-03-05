import axios from 'axios';
import { 
    FETCH_REQUEST_LISTING, 
    FETCH_REQUEST_SUCCESS,
    FETCH_REQUEST_FAILURE 
} from '../actions/action-types';

function requestListingData(){
    return{
        type: FETCH_REQUEST_LISTING,
        payload: {
            isFetching: true
        }
    }
}

function receivedListingData(listingData){
    return{
        type: FETCH_REQUEST_SUCCESS,
        payload: {
            isFetching : false,
            listingData: listingData.data
        }
    }
}

function errorListingData(errordata){
    return{
        type: FETCH_REQUEST_FAILURE,
        payload: {
            isFetching : false, 
            errordata
        }
    }
}

export function getListingData(){
    return dispatch => {
        dispatch(requestListingData());
        return axios.get('https://reqres.in/api/users')
            .then(response => {
                if(response.status === 200){
                    dispatch(receivedListingData(response.data))
                }
            })
            .catch(error => {
                dispatch(errorListingData(error.data));
            });
    }
}