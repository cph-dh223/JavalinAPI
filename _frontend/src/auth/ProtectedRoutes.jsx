import React, { useEffect } from 'react';
import { useNavigation } from 'react-router-dom';
import LoginForm from './LoginForm';

function ProtectedRoutes({ isAuthencated, chidren }) {
    const navigate = useNavigation();

    useEffect(() => {
        if (!isAuthencated) {
            return (<LoginForm />)
        }
    }, [isAuthencated, navigate])
    if (isAuthencated) return (<>{chidren}</>);
}

export default ProtectedRoutes;

ProtectedRoutes.protoTypes = {
    chidren: PropTypes.node.isReqired,
    isAuthencated: PropTypes.bool
}