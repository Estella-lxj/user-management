const UserInfoField = ({ label, input, type, meta: { touched, error, warning } }) => {
    return (
        <div className="input-row">
            <label>{label}</label><br />
            <input {...input} type={type} />
            {touched && ((error && <div className="form-error-warning">{error}</div>) || (warning && <span>{warning}</span>))}
        </div>
    )
}

export default UserInfoField;



