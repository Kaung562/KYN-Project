import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';
import { useHistory, useNavigate } from 'react-router-dom';

const FacebookLoginComponent = () => {
    const navigate = useNavigate();
  const responseFacebook = async (response) => {
    try {
        const res = await axios.get('http://localhost:9090/login/facebook');
        console.log(res.data);
        navigate('/loginhome');
    } catch (error) {
        console.error(error);
    }
};

return (
    <div>
        <FacebookLogin
            appId="319406134392526"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}
        />
    </div>
);
};

export default FacebookLoginComponent;

