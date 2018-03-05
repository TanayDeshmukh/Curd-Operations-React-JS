import { EMPTY_LIST } from './action-types';

export function emptyList(){
    return{
        type: EMPTY_LIST, 
        payload: {
            isFetching: false
        }
    }
}