import React from 'react';
import './Login.css'
import {Button} from "@material-ui/core";
import { auth, provider} from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

const Login = () => {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                dispatch({
                   type: actionTypes.SET_USER,
                   user: result.user,
                });
            })
            .catch(error => console.log(error.message))
    }
    return (
        <div className="login">
            <div className="login_logo">
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png'
                    alt=''
                />
                <img
                    src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg'
                    alt=''
                />
            </div>
            <Button type="submit" onClick={signIn}>
                SignIn
            </Button>
        </div>
    );
};

export default Login;
