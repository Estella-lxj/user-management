import { withRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import UserForm from './UserForm';


const AddNewUser = ({ history, postUser, postStatus }) => {
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [gender, setGender] = useState('male');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');
    const [repeat, setRepeat] = useState('');
    const [reminder, setReminder] = useState({ firstError: "", lastError: "", ageError: "", passwordError: "" })

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
            _id: "",
            firstName: first,
            lastName: last,
            gender: gender,
            age: age,
            password: password,
        }

        postUser(info, history)
    };

    useEffect((() => console.log(reminder)), [reminder]);


    return (
        <div>
            {postStatus.isPosting ? <div>Creating...</div> : null}
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
                btnText='Add User'
                titleText='Create New User'
                reminder={reminder}
            />
        </div >
    )
}

export default withRouter(AddNewUser);