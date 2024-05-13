import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function ProtectedRoutes({ isAuthencated, chidren }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthencated) {
            navigate('/login')
        }
    }, [isAuthencated, navigate])
    if (isAuthencated) return (<>{chidren}</>);
}

export default ProtectedRoutes;

ProtectedRoutes.protoTypes = {
    chidren: PropTypes.node.isRequired,
    isAuthencated: PropTypes.bool
}