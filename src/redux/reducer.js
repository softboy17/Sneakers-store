import {FETCH_REQUEST_BRANDS_SUCCESS, FETCH_REQUEST_SNEAKERS_SUCCESS, SEARCH_TEXT} from "../constants/type";

const initialState = {
    sneakers: [],
    brands: []
};

const reducer = (state = initialState, action) => {
    console.log(action);
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
        case SEARCH_TEXT:
            return {
                ...state,
                sneakers: state.sneakers.filter(item => item && item.brand.toLowerCase() === action.payload.toLowerCase())
            }
        default:
            return state
    }
}

export default reducer;