import axios from 'axios';
import { 
    FETCHING_PERSON, 
    FETCH_PERSON_SUCCESS,
    FETCH_PERSON_FAILURE,
    ADD_NEW_USER 
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
            isFetching: false,
            singleObject: data
        }
    }
}

function errorOccured(errordata){
    return{
        type: FETCH_PERSON_FAILURE,
        payload: {
            isFetching: false, 
            errordata
        }
    }
}

function addNewUser(){
    return{
        type: ADD_NEW_USER,
        payload: {
            isFetching: false,
            singleObject: []
        }
    }
}

export function getPerson(id){

    if(id===0){
        return dispatch => {
            dispatch(addNewUser());
        }
    }
    else{
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
}

