import { 
    FETCH_REQUEST_LISTING, 
    FETCH_REQUEST_SUCCESS,
    FETCH_REQUEST_FAILURE,
    FETCHING_PERSON,
    FETCH_PERSON_SUCCESS,
    FETCH_PERSON_FAILURE,
    EMPTY_LIST
} from '../actions/action-types';

const initialData = {
    listingData: [],
    isFetching: false,
    errorData: '',
    singleObject:{
        id: '',
        firstName: '',
        lastName: ''
    }
}

export default function listingStore(state=initialData, action){
    switch(action.type){

        case EMPTY_LIST:
            return{
                ...state,
                listingData: []
            }

        case FETCH_REQUEST_LISTING:
            return{
                ...state,
                isFetching: action.payload.isFetching 
            }
        case FETCH_REQUEST_SUCCESS:
            console.log('---------------------',action.payload.listingData)
            console.log('-state FETCH_REQUEST_SUCCESS--------------------', state)
            return{
                ...state,
                isFetching: action.payload.isFetching,
                listingData: [...state.listingData, ...action.payload.listingData]
            }
        case FETCH_REQUEST_FAILURE:
            return{
                ...state,
                isFetching: action.payload.isFetching,
                errorData: action.payload.errorData
            }
        
        case FETCHING_PERSON:
            return{
                ...state,
                isFetching: action.payload.isFetching
            }

        case FETCH_PERSON_SUCCESS:
            return{
                ...state,
                isFetching: action.payload.isFetching,
                singleObject: action.payload.singleObject
            }

        case FETCH_PERSON_FAILURE:
            return{
                ...state,
                isFetching: action.payload.isFetching,
                errorData: action.payload.errorData
            }

        default:
            return state;        
    }
}