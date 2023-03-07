import {FETCH_REQUEST_BRANDS_SUCCESS, FETCH_REQUEST_SNEAKERS_SUCCESS, SEARCH_TEXT} from "../constants/type";

const initialState = {
    sneakers: [],
    brands: [],
    filteredItems: []
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
            const title = action.payload;
            const filteredItems = state.sneakers.filter(item => {
                if (item && item.brand) {
                    return (item.brand.toLowerCase() + " " + item.model.toLowerCase()).includes(title.toLowerCase());
                }
                return false;
            });

            return {
                ...state,
                filteredItems,
            }
        default:
            return state
    }
}

export default reducer;