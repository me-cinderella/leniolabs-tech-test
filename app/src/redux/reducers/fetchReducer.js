const initialState = {
    congressMembers: [],
    error: ''
}

export default function fetch(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_BEGIN':
            return state;
        case 'FETCH_SUCCESS':
            return { ...state, congressMembers: action.payload };
        case 'FETCH_FAILURE':
            return { ...state, error: action.payload };
        default:
            return state;
    }
};