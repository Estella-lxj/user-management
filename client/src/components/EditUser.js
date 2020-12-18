
import { withRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import UserForm from './UserForm';


const EditUser = ({ history, match, getPrevInfo,
    userInfo, postUser, postStatus }) => {
    const [id, setId] = useState('');
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [gender, setGender] = useState('male');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');
    const [repeat, setRepeat] = useState('');
    const [reminder, setReminder] = useState({ firstError: "", lastError: "", ageError: "", passwordError: "" })

    useEffect((() => {
        getPrevInfo(match.params.id)
    }), [])

    useEffect((() => {
        setId(userInfo._id);
        setFirst(userInfo.firstName);
        setLast(userInfo.lastName);
        setGender(userInfo.gender);
        setAge(userInfo.age);
        setPassword(userInfo.password);
        console.log(userInfo)
    }), [userInfo])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (first.trim() === "") {
            setReminder({ ...reminder, firstError: "First Name is required!" });
            return;
        } else {
            setReminder({ ...reminder, firstError: "" });
        }

        if (age < 0 || age > 200) {
            setReminder({ ...reminder, firstError: "", ageError: "Age is invalid!" });
            console.log(reminder)
            return;
        } else {
            setReminder({ ...reminder, ageError: "" });
        }

        if (password !== repeat) {
            setReminder({ ...reminder, firstError: "", ageError: "", passwordError: "Password doesn't match!" });
            return;
        } else {
            setReminder({ ...reminder, passwordError: "" })
        }
        const info = {
            _id: id,
            firstName: first,
            lastName: last,
            gender: gender,
            age: age,
            password: password,
        }
        postUser(info, history);

    };

    return (
        <div>
            {postStatus.isPosting ? <div>Editing...</div> : null}
            {postStatus.error ? <div>{postStatus.error.message}</div> : null}
            <UserForm
                first={first}
                last={last}
                gender={gender}
                age={age}
                password={password}
                repeat={repeat}
                setFirst={setFirst}
                setLast={setLast}
                setGender={setGender}
                setAge={setAge}
                setPassword={setPassword}
                setRepeat={setRepeat}
                handleSubmit={handleSubmit}
                btnText='Save Changes'
                titleText='Edit User'
                reminder={reminder}
            />
        </div >
    )
}

export default withRouter(EditUser);