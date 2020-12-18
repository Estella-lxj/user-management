import { withRouter } from 'react-router-dom';
import { useState } from 'react';

const UserForm = ({ first, last, gender, age, password,
    repeat, setFirst, setLast, setGender, setAge,
    setPassword, setRepeat, handleSubmit, history,
    btnText, titleText, reminder }) => {



    const handleBack = () => {
        history.push('/')
    };

    return (
        <div>
            <h1>{titleText}</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='firstName' required>First Name</label>
                <input type='text' id='firstName' value={first}
                    onChange={(e) => setFirst(e.target.value)} />
                {reminder.firstError ? <div>{reminder.firstError}</div> : null}
                <br />

                <label htmlFor='lastName'>Last Name</label>
                <input type='text' id='lastName' value={last}
                    onChange={(e) => setLast(e.target.value)} />
                <br />

                <label htmlFor='gender'>Gender</label>
                <select id='gender' value={gender}
                    onChange={(e) => setGender(e.target.value)}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <br />

                <label htmlFor='age'>Age</label>
                <input type='number' id='firstName' value={age}
                    onChange={(e) => setAge(e.target.value)} />
                {reminder.ageError ? <div>{reminder.ageError}</div> : null}
                <br />

                <label htmlFor='password'>Password</label>
                <input type='password' id='password' value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <br />

                <label htmlFor='repeat'>Repeat</label>
                <input type='password' id='repeat' value={repeat}
                    onChange={(e) => setRepeat(e.target.value)} />
                {reminder.passwordError ? <div>{reminder.passwordError}</div> : null}
                <br />
                <button onClick={handleBack}>Back</button>
                <button type='submit'>{btnText}</button>

            </form>
        </div>
    )
}

export default withRouter(UserForm);