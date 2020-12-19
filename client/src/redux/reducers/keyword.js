const keyword = (state = '', action) => {
    switch (action.type) {
        case ('SET_KEYWORD'):
            return action.payload;
        default:
            return state;
    }
}

export default keyword;