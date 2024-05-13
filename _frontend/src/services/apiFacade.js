import { BASE_URL } from '../utils/globalVariables.js';

const login = async (email,password) => {

    try {
        const result = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
        const data = await result.json();
        console.log(data);      

    }
    catch (e) {
        console.log(e);
    }
}

const getPost = async() => {
    try {
        // const token = getFromLocalStorage
    } catch (e) {
        
    }
}

login('user3@email.dk','1234');