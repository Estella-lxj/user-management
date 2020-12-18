const order = (state = "", action) => {
    switch (action.type) {
        case ('SET_ORDER'):
            return action.text;
        default:
            return state;
    }
}

export default order;