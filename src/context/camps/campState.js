import React, { useReducer } from 'react';
import axios from 'axios';
import CampContext from './campContext';
import CampReducer from './campReducer';
import {
    SEARCH_CAMPS
} from '../types';

const CamperState = props => {
    const initialState = {
        camps: []
    }

    const [state, dispatch] = useReducer(CampReducer, initialState);

    //Search Camps

    const searchCamps = async (countryName) => {
        const res = await axios.get(`http://localhost:5000/campgrounds?q=${countryName}`);

        dispatch({
            type: SEARCH_CAMPS,
            payload: res.data
        })

        console.log(res.data.campgrounds)
    }

    return (<CampContext.Provider value={{
        camps: state.camps,
        searchCamps
    }}>
        {props.children}

    </CampContext.Provider>)
}

export default CamperState;