const initialState = {
    _id: '', firstName: '', lastName: '',
    age: '', gender: '', password: '',
};

const userInfo = (state = initialState, action) => {
    switch (action.type) {
        case ('SET_USER_INFO'):
            return {
                ...state,
                _id: action._id,
                firstName: action.firstName,
                lastName: action.lastName,
                age: action.age,
                gender: action.gender,
                password: action.password,
            }
        default:
            return {
                ...initialState,
            }
    }
}

export default userInfo;
