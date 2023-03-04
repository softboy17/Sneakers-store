import axios from "../http/axios";
import {
    FETCH_REQUEST_BRANDS, FETCH_REQUEST_BRANDS_ERROR, FETCH_REQUEST_BRANDS_SUCCESS,
    FETCH_REQUEST_SNEAKERS,
    FETCH_REQUEST_SNEAKERS_ERROR,
    FETCH_REQUEST_SNEAKERS_SUCCESS
} from "../constants/type";

export const fetchSneakersRequest = () => {
    return { type: FETCH_REQUEST_SNEAKERS }
}

export const fetchSneakersSuccess = (data) => {
    return { type: FETCH_REQUEST_SNEAKERS_SUCCESS, payload: data }
}

export const fetchSneakersError = () =>{
    return { type: FETCH_REQUEST_SNEAKERS_ERROR }
}

export const fetchBrandsRequest = () => {
    return { type: FETCH_REQUEST_BRANDS }
}

export const fetchBrandsSuccess = (data) => {
    return { type: FETCH_REQUEST_BRANDS_SUCCESS, payload: data }
}

export const fetchBrandsError = () =>{
    return { type: FETCH_REQUEST_BRANDS_ERROR }
}

export const fetchSneakers = () => {
    return dispatch => {
        dispatch(fetchSneakersRequest());
        axios.get('/items').then(res => {
            dispatch(fetchSneakersSuccess(res.data[0].sneakers))
        }, error => dispatch(fetchSneakersError()))
    }
}

export const fetchBrands = () => {
    return dispatch => {
        dispatch(fetchBrandsRequest());
        axios.get('/items').then(res => {
            dispatch(fetchBrandsSuccess(res.data[0].brands))
        }, error => dispatch(fetchBrandsError()))
    }
}