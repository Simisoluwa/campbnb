import {
    SEARCH_CAMPS
} from '../types';

export default (state,action) => {
    switch(action.type){
        case SEARCH_CAMPS:
            return{
                ...state,
                camps: action.payload
            };
        default:
            return state;
    }
}