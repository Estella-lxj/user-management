const initialState = {
    isPosting: false,
    error: null,
}

const postStatus = (state = initialState, action) => {
    switch (action.type) {
        case ('POST_USER_START'):
            return {
                ...state,
                isPosting: true,
            };
        case ('POST_USER_FAIL'):
            return {
                ...state,
                isPosting: false,
                error: action.error,
            }
        case ('POST_USER_SUCCESS'):
            return {
                ...state,
                isPosting: false,
                error: null,
            }
        default:
            return state;
    }
}

export default postStatus;