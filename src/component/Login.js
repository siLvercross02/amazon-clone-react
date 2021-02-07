import React, {useState} from 'react'
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        // Firebase Login
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        // Firebase Register
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfullt created a new user with email
                console.log(auth);
                if(auth) {
                    history.push('/');
                }
            })
            .catch(error => alert(error.message));
    }

    return (
        <div className="login">
            <Link to="/">
                <img 
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt="logo-1"
                />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button                             
                        className="login__signInButton"
                        type="submit"
                        onClick={signIn}
                    >
                        Sign In
                    </button>
                </form>

                <p>By signing-in you agree to the  Amazon Fake Clone Conditions of Use & Sale. Please see ou Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>

                <button 
                    className="login__RegisterButton"
                    onClick={register}
                > 
                    Create you Amazon Account
                </button>
            </div>
        </div>
    )
}

export default Login
