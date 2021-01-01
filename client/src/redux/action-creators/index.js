import axios from 'axios';
/****************GET USERS LIST***************************/

export const getUsers = (page, limit, keyword, order) => {
    return dispatch => {
        dispatch({ type: 'FETCH_USERS_START' });
        axios.get(`https://user-management-api-nodejs.herokuapp.com/api/usermanagement/users/?page=${page}&limit=${limit}&keyword=${keyword}&order=${order}`)
            .then(res => dispatch({ type: 'FETCH_USERS_SUCCESS', payload: res.data }))
            .catch(e => dispatch({ type: 'FETCH_USERS_FAIL', error: e }))
    }
}

/******************DELETE USER*************************/


export const deleteUser = (_id, page, limit, keyword, order) => {
    return dispatch => {
        dispatch({ type: 'FETCH_USERS_START' });
        axios.delete(`https://user-management-api-nodejs.herokuapp.com/api/usermanagement/users/?_id=${_id}&page=${page}&limit=${limit}&keyword=${keyword}&order=${order}`)
            .then(res => dispatch({ type: 'FETCH_USERS_SUCCESS', payload: res.data }))
            .catch(e => dispatch({ type: 'FETCH_USERS_FAIL', error: e }))
    }
}

/*****************CREATE AND UPDATE USER******************/

// export const postUser = (info, history) => {
//     return dispatch => {
//         dispatch({ type: 'FETCH_USERS_START' });
//         axios.post(`https://user-management-api-nodejs.herokuapp.com/api/usermanagement/users/`, info)
//             .then(res => dispatch({ type: 'FETCH_USERS_SUCCESS' }))
//             .then(history.push('/'))
//             .catch(e => dispatch({ type: 'FETCH_USERS_FAIL', error: e }))
//     }
// }

export const postUser = (info, history, page, limit, order, keyword) => async dispatch => {
    dispatch({ type: 'FETCH_USERS_START' });
    try {
        const res = await axios.post(`https://user-management-api-nodejs.herokuapp.com/api/usermanagement/users/?page=${page}&limit=${limit}&keyword=${keyword}&order=${order}`, info);
        dispatch({ type: 'FETCH_USERS_SUCCESS', payload: res.data })
        history.push('/')
    } catch (e) {
        dispatch({ type: 'FETCH_USERS_FAIL', error: e })
    }
};


/*****************GET ONE USER INFO********************/

export const getUserInfo = _id => {
    return dispatch => {
        dispatch({ type: 'FETCH_USER_INFO_START' });
        axios.get(`https://user-management-api-nodejs.herokuapp.com/api/usermanagement/user/${_id}`)
            .then(res => dispatch({ type: 'FETCH_USER_INFO_SUCCESS', payload: res.data }))
            .catch(e => dispatch({ type: 'FETCH_USER_INFO_FAIL', error: e }))
    }
}

export const cleanUserInfo = () => {
    return {
        type: 'CLEAN_USER_INFO'
    }
}

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