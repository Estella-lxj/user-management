import { useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';
import UserInfoField from './UserInfoField';
import { connect } from 'react-redux';
import { postUser, getUserInfo } from '../redux/action-creators'

const UserEdit = props => {
    const { match, history, handleSubmit, pristine, reset, submitting,
        valid, getUserInfo, postUser, userInfoStatus, postStatus } = props;
    //
    useEffect((() => {
        getUserInfo(match.params._id)
    }), [])

    const submitForm = (values) => {
        postUser(values, history)
    }


    return (
        <form onSubmit={handleSubmit(submitForm)}>
            <div>
                {match.path === "/user/new"
                    ? <span>Create New User</span>
                    : <span>Edit User</span>}
                <span>
                    {userInfoStatus.isFetching ? <img style={{ height: "2rem" }} src="https://static.wixstatic.com/media/43250d_b709539d6a7c425e852332cbfa053f42~mv2.gif" alt="loader" /> : undefined}
                    {userInfoStatus.error ? <span>Error: {userInfoStatus.error.message}</span> : undefined}
                    {postStatus.isPosting ? <img style={{ height: "2rem" }} src="https://static.wixstatic.com/media/43250d_b709539d6a7c425e852332cbfa053f42~mv2.gif" alt="loader" /> : undefined}
                    {postStatus.error ? <span>{postStatus.error.message}</span> : undefined}
                </span>
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

            <button type="button" disabled={pristine || submitting}
                onClick={reset}> Reset
                </button>

            <button type="submit" disabled={!valid || submitting}>
                Submit
            </button>
        </form>
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
            userInfoStatus: state.userInfo,
            postStatus: state.postStatus,
        }
    }
    return {
        initialValues: state.userInfo.data,
        userInfoStatus: state.userInfo,
        postStatus: state.postStatus,
    }
}

UserInfoForm = connect(mapStateToProps, { postUser, getUserInfo })(UserInfoForm)

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