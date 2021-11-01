import React, { useState } from 'react';
import { Link, NavLink, useLocation,useHistory} from 'react-router-dom';
import './Login.css'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from './Firebase/firebase.init';
import useAuth from '../../hooks/useAuth/useAuth';






initializeAuthentication();
const auth = getAuth();



const Login = () => {
    const location =useLocation();
    const history= useHistory()
    const redirect_uri=location.state?.from || '/home'
    console.log('came from', location.state?.from)
    const { signInGoogle, user } = useAuth()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSignUp = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {


            })
            .catch((error) => {
                console.log(error.message)
            });
    }
    const handleGoogleLogIn=()=>{
        signInGoogle()
        .then(result=>{
          history.push(redirect_uri)
        })
    }

    return (
        <div id="form" className="login-form">

            <div className="my-cart">
                <h2>Please login</h2>

                <form onSubmit={handleSignUp}>

                    <input onBlur={handleEmail} type="email" placeholder="Enter your email" />
                    <br />
                    <input onBlur={handlePassword} type="password" placeholder="Enter password" /><br />
                    {
                        user.email ?  <input className="login-btn" type="submit" value="Login" />:
                      <NavLink to="/register">  <input  className="login-btn" type="submit" value="Register" /></NavLink>
                    }
                   <br />
                </form>
                <Link to="/">Forgot password</Link><br />
                <span>Create a new account
                    </span><br />
                <p >----- Or login -----</p>
                <button className="online-btn google" onClick={handleGoogleLogIn}><i class="fab fa-google"></i> Google</button>
                <button className="online-btn facebook" onClick={signInGoogle}><i class="fab fa-facebook"></i> Facebook</button>
                <button className="online-btn twitter" onClick={signInGoogle}><i class="fab fa-twitter"></i> Twitter</button>
                <button className="online-btn github" onClick={signInGoogle}><i class="fab fa-github"></i> Github</button>
            </div>
        </div>
    );
};

export default Login;