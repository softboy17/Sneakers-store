import {FETCH_REQUEST_SNEAKERS_SUCCESS} from "../constants/type";

const initialState = {
    sneakers: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REQUEST_SNEAKERS_SUCCESS:
            return {
                ...state,
                sneakers: action.payload
            }
        default:
            return state
    }
}

export default reducer;