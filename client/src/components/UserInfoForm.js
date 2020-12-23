import { useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';
import UserInfoField from './UserInfoField';
import { connect } from 'react-redux';
import { postUser, getUserInfo, cleanUserInfo } from '../redux/action-creators'
import './UserInfoForm.css';

const UserEdit = props => {
    const { page, limit, keyword, order, match, history, handleSubmit, pristine, reset, submitting,
        valid, getUserInfo, postUser, userInfo, cleanUserInfo } = props;

    useEffect((() => {
        if (match.params._id !== undefined) getUserInfo(match.params._id)

        return () => {
            cleanUserInfo();
        }
    }), [])

    const submitForm = (values) => {
        postUser(values, history, page, limit, order, keyword);
    }


    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(submitForm)}>
                <div className="form-header">
                    {match.path === "/user/new"
                        ? <h1>Create New User</h1>
                        : <h1>Edit User</h1>}
                    {userInfo.isFetching ? <img src="https://static.wixstatic.com/media/43250d_b709539d6a7c425e852332cbfa053f42~mv2.gif" alt="loader" /> : undefined}
                </div>
                <Field
                    name='firstName' label="First Name: "
                    component={UserInfoField} type="text"
                    validate={[required]}
                />
                <Field
                    name='lastName' label="Last Name: "
                    component={UserInfoField} type="text"
                    validate={[required]} />
                <Field
                    name='gender' label="Gender: "
                    component={UserInfoField} type="text" />
                <Field
                    name='age' label="Age: "
                    component={UserInfoField} type="number"
                    validate={[minValue1, maxValue200]}
                />
                <Field
                    name='password' label="Password: "
                    component={UserInfoField} type="password"
                    validate={[required, minLength3]} />
                <Field
                    name='repeat' label="Repeat: "
                    component={UserInfoField} type="password"
                    validate={[passwordsMatch]} />
                <div className="form-btn-group">
                    <button type="button" disabled={pristine || submitting}
                        onClick={reset} className="form-btn-reset"> Reset
                </button>

                    <button type="submit" className="form-btn-submit"
                        disabled={!valid || submitting}>
                        Submit
            </button>
                </div>
                {userInfo.error ? <span>Error: {userInfo.error.message}</span> : undefined}
            </form>
        </div>
    )
}


let UserInfoForm = reduxForm({
    form: 'infoForm',
    enableReinitialize: true
})(UserEdit);

const mapStateToProps = (state, props) => {
    if (props.match.path === "/user/new") {
        return {
            initialValues: null,
            userInfo: state.userInfo,
            users: state.users,
            page: state.page,
            limit: state.limit,
            keyword: state.keyword,
            order: state.order,
        }
    }
    return {
        initialValues: state.userInfo.data,
        userInfo: state.userInfo,
        users: state.users,
        page: state.page,
        limit: state.limit,
        keyword: state.keyword,
        order: state.order,
    }
}

UserInfoForm = connect(mapStateToProps, { postUser, getUserInfo, cleanUserInfo })(UserInfoForm)

export default UserInfoForm;


const required = value => value ? undefined : 'Required';

const minValue = min => value =>
    value && value < min ? 'Invalid' : undefined
const minValue1 = minValue(1)

const maxValue = max => value =>
    value && value > max ? 'Invalid' : undefined
const maxValue200 = maxValue(200)

const minLength = min => value =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined
const minLength3 = minLength(3)

const passwordsMatch = (value, allValues) =>
    value !== allValues.password ? 'Passwords don\'t match' : undefined;