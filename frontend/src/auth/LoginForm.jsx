import React, {useState} from 'react';
import { login } from '../services/apiFacade'
function LoginForm({ setIsAuthencated, setPerson }) {
    const [person, setLoginPerson] = useState({ username: "", password: "" })

    const handleChange = (e) => {
        setLoginPerson({ ...person, [e.target.id]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        console.log(person);
        const auth =  login(person.username, person.password)
        console.log(auth);

        setPerson({token: auth.token})

    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <label>User name:   </label>
                <input id='username' type='text' onChange={handleChange} />
                <br></br>
                <label>password:</label>
                <input id='password' type='password' onChange={handleChange} />
                <br></br>
                <button type='submit'>submit</button>
            </form>
        </>
    );
}

export default LoginForm;