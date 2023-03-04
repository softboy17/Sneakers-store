import {FETCH_REQUEST_BRANDS_SUCCESS, FETCH_REQUEST_SNEAKERS_SUCCESS} from "../constants/type";

const initialState = {
    sneakers: [],
    brands: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REQUEST_SNEAKERS_SUCCESS:
            return {
                ...state,
                sneakers: action.payload
            }
        case FETCH_REQUEST_BRANDS_SUCCESS:
            return {
                ...state,
                brands: action.payload
            }
        default:
            return state
    }
}

export default reducer;