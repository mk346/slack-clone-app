import { Button } from '@material-ui/core';
import React from 'react';
import "./Login.css";
import { auth, provider} from "./firebase";
import { useStateValue} from "./StateProvider"
import { actionTypes } from './reducer';

function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = (e) => {
        auth 
            .signInWithPopup(provider)
            .then(result => {
                console.log(result);
                dispatch(
                    {
                        type: actionTypes.SET_USER,
                        user: result.user,
                    });
            })
            .catch((error) => {
                alert(error.message);
            }); 
    };
    return (
        <div className="login">
            <div className="login_container">
                <img src="https://www.seekpng.com/png/detail/221-2211816_elk-stack-logo.png" alt=""/>
                <h1>Sign in to My Slack App</h1>
                <p>calebapp.slack.com</p>
                <Button onClick={signIn}>Sign In With Google</Button>
            </div>
            
        </div>
    )
}

export default Login
