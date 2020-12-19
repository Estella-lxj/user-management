const UserInfoField = ({ label, input, type, meta: { touched, error, warning } }) => {
    return (
        <div className="input-row">
            <label>{label}</label><br />
            <input {...input} type={type} />
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    )
}

export default UserInfoField;



