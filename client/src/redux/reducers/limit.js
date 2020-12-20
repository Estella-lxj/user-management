const limit = (state = 10, action) => {
    switch (action.type) {
        case ('SET_LIMIT'):
            return action.payload;
        default:
            return state;
    }
}

export default limit;