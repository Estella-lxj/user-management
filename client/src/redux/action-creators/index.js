import axios from 'axios';
/****************GET USERS LIST***************************/

export const getUsers = (page, limit, keyword, order) => async dispatch => {
    dispatch({ type: 'FETCH_USERS_START' });
    try {
        const res = await axios.get(`http://localhost:4000/api/usermanagement/users/${page}/${limit}/?keyword=${keyword}&order=${order}`);
        dispatch({ type: 'FETCH_USERS_SUCCESS', payload: res.data });
    } catch (e) {
        dispatch({ type: 'FETCH_USERS_FAIL', error: e });
    }
}

/*****************GET ONE USER INFO********************/

export const getUserInfo = (id) => async dispatch => {
    if (!id) return;
    dispatch({ type: 'FETCH_USER_INFO_START' });
    try {
        const res = await axios.get(`http://localhost:4000/api/usermanagement/user/${id}`);
        dispatch({ type: 'FETCH_USER_INFO_SUCCESS', payload: res.data })
    } catch (e) {
        dispatch({ type: 'FETCH_USER_INFO_FAIL', error: e })
    }

}

/******************DELETE USER*************************/

export const deleteUser = id => async dispatch => {
    dispatch({ type: 'DELETE_USER_START' });
    try {
        const res = await axios.delete(`http://localhost:4000/api/usermanagement/user/${id}`);
        dispatch({ type: 'DELETE_USER_SUCCESS' });
    } catch (e) {
        dispatch({ type: 'DELETE_USER_FAIL', error: e })
    }
}

/*****************CREATE AND UPDATE USER******************/

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


/*****************SEARCH KEYWORD*****************************/
export const setKeyword = (text) => {
    return {
        type: 'SET_KEYWORD',
        payload: text,
    }
}

/*****************CHANGE ORDER**************************/
export const setOrder = (text) => {
    return {
        type: 'SET_ORDER',
        payload: text,
    }
}

/*****************CHANGE PAGE**************************/
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

/*****************Change limit**************************/

export const setLimit = (num) => {
    return {
        type: 'SET_LIMIT',
        payload: num,
    }
}