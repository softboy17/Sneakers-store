import axios from "../http/axios";
import {FETCH_REQUEST_SNEAKERS, FETCH_REQUEST_SNEAKERS_ERROR, FETCH_REQUEST_SNEAKERS_SUCCESS} from "../constants/type";

export const fetchSneakersRequest = () => {
    return { type: FETCH_REQUEST_SNEAKERS }
}

export const fetchSneakersSuccess = (data) => {
    return { type: FETCH_REQUEST_SNEAKERS_SUCCESS, payload: data }
}

export const fetchSneakersError = () =>{
    return { type: FETCH_REQUEST_SNEAKERS_ERROR }
}

export const fetchSneakers = () => {
    return dispatch =>{
        dispatch(fetchSneakersRequest());
        axios.get('/items').then(res => {
            dispatch(fetchSneakersSuccess(res.data))
        }, error => dispatch(fetchSneakersError()))
    }
}