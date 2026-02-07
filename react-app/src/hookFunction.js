import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const hookFunction = (Component) => {
    return (props) => {
        const params = useParams();
        const navigation = useNavigate();
        return <Component navigation={navigation} params={params} {...props} />
    }
}

export default hookFunction;