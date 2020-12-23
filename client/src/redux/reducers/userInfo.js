const initialState = {
    isFetching: false,
    error: null,
    data: {},
}

const userInfo = (state = initialState, action) => {
    switch (action.type) {
        case ('FETCH_USER_INFO_START'):
            return {
                ...state,
                isFetching: true,
            };
        case ('FETCH_USER_INFO_FAIL'):
            return {
                ...state,
                isFetching: false,
                error: action.error,
            }
        case ('FETCH_USER_INFO_SUCCESS'):
            return {
                ...state,
                isFetching: false,
                error: null,
                data: action.payload,
            }
        case ('CLEAN_USER_INFO'):
            return initialState;
        default:
            return state;
    }
}

export default userInfo;
