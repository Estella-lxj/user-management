import { combineReducers } from 'redux';
import users from './users';
import page from './page';
import userInfo from './userInfo';
import keyword from './keyword';
import order from './order';
import postStatus from './postStatus';
import deleteStatus from './deleteStatus';

const reducers = combineReducers({
    users,
    page,
    userInfo,
    keyword,
    order,
    postStatus,
    deleteStatus,
});

export default reducers;