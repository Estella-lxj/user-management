const initialState = {
    isDeleting: false,
    error: null,
}

const deleteStatus = (state = initialState, action) => {
    switch (action.type) {
        case ('DELETE_USER_START'):
            return {
                ...state,
                isDeleting: true,
            };
        case ('DELETE_USER_FAIL'):
            return {
                ...state,
                iisDeleting: false,
                error: action.error,
            }
        case ('DELETE_USER_SUCCESS'):
            return {
                ...state,
                isDeleting: false,
                error: null,
            }
        default:
            return state;
    }
}

export default deleteStatus;
