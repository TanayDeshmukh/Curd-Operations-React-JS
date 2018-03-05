import axios from 'axios';
import { 
    FETCHING_PERSON, 
    FETCH_PERSON_SUCCESS,
    FETCH_PERSON_FAILURE 
} from '../actions/action-types';

function requestPersonData(){
    return{
        type: FETCHING_PERSON,
        payload: {
            isFetching: true
        }   
    }
}

function receivedPersonData(data){
    return{
        type: FETCH_PERSON_SUCCESS,
        payload: {
            isFetching : false,
            singleObject: data
        }
    }
}

function errorOccured(errordata){
    return{
        type: FETCH_PERSON_FAILURE,
        payload: {
            isFetching : false, 
            errordata
        }
    }
}

export function getPerson(id){

    return dispatch => {
        dispatch(requestPersonData());
            return  axios.get(`https://reqres.in/api/users/${id}`)
            .then(response => {
                dispatch(receivedPersonData(response.data.data));
            })
            .catch(error => {
                dispatch(errorOccured(error));
            }); 
    }
}

