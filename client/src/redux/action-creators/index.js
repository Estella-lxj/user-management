import axios from 'axios';
/*******************************************/

const requestSuccess = (res) => {
    return {
        type: 'FETCH_USERS_SUCCESS',
        data: res.data.data,
        prev: res.data.prev,
        next: res.data.next,
    }
};

export const getUsers = (page, keyword, order) => {
    return (dispatch) => {
        dispatch({ type: 'FETCH_USERS_START' });
        axios.get(`http://localhost:4000/api/usermanagement/users/${page}/7/?keyword=${keyword}&order=${order}`)
            .then(res => dispatch(requestSuccess(res)))
            .catch(e => dispatch({ type: 'FETCH_USERS_FAIL', error: e }))
    }
}

/*******************************************/
export const goToNextPage = () => {
    return {
        type: 'NEXT_PAGE',
    }
};

export const goToPrevPage = () => {
    return {
        type: 'PREV_PAGE',
    }
};

/*******************************************/

export const deleteUser = (id) => async dispatch => {
    dispatch({ type: 'DELETE_USER_START' });
    try {
        const res = await axios.delete(`http://localhost:4000/api/usermanagement/user/${id}`);
        dispatch({ type: 'DELETE_USER_SUCCESS' });
    } catch (e) {
        dispatch({ type: 'DELETE_USER_FAIL', error: e })
    }
}

/*******************************************/

export const postUser = (info, history) => async dispatch => {
    dispatch({ type: 'POST_USER_START' });
    try {
        const res = await axios.post('http://localhost:4000/api/usermanagement/users', info);
        dispatch({ type: 'POST_USER_SUCCESS' });
        history.push('/');
    } catch (e) {
        dispatch({ type: 'POST_USER_FAIL', error: e })
    }
};


export const setUserBody = (data) => {
    return {
        type: 'SET_USER_INFO',
        _id: data._id || '',
        firstName: data.firstName,
        lastName: data.lastName,
        age: data.age,
        gender: data.gender,
        password: data.password,
    }
}

/******************************************/

export const getPrevInfo = (id) => {
    return (dispatch) => {
        axios.get(`http://localhost:4000/api/usermanagement/user/${id}`)
            .then(res => {
                console.log(res)
                dispatch(setUserBody(res.data))
            })
    }
}

export const setKeyword = (text) => {
    return {
        type: 'SET_KEYWORD',
        keyword: text,
    }
}

export const setOrder = (text) => {
    return {
        type: 'SET_ORDER',
        text: text,
    }
}
