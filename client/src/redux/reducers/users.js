const initialState = {
    isFetching: false,
    error: null,
    data: [],
    prev: null,
    next: null
}

const users = (state = initialState, action) => {
    switch (action.type) {
        case ('FETCH_USERS_START'):
            return {
                ...state,
                isFetching: true,
            };
        case ('FETCH_USERS_FAIL'):
            return {
                ...state,
                isFetching: false,
                error: action.error,
            }
        case ('FETCH_USERS_SUCCESS'):
            return {
                ...state,
                isFetching: false,
                error: null,
                data: action.payload.data,
                prev: action.payload.prev,
                next: action.payload.next,
            }
        default:
            return state;
    }
}

export default users;
