const initialState = 1;
const page = (state = initialState, action) => {
    switch (action.type) {
        case ('NEXT_PAGE'):
            if (state < 1) return state = initialState;
            else return state += 1;
        case ('PREV_PAGE'):
            if (state < 1) return state = initialState;
            else return state -= 1;
        default:
            return state;
    }
}

export default page;