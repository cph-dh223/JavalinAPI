import { BASE_URL } from '../utils/globalVariables.js';

const login = async (username,password) => {

    try {
        const result = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
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
        const token = getFromLocalStorage(token)
        const response = await fetch(`${BASE_URL}/posts`,{
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        return await response.json()
    } catch (e) {
        throw new Error(e)
    }
}


export {
    login,
    getPost
}