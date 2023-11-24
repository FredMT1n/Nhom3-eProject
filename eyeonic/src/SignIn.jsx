import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SignIn.css'

function SignIn() {
    const [isActive, setActive] = useState("true");

    const handleToggle = () => {
        setActive(!isActive);
    };
    return (
        <div className='body'>
            <div className={isActive ? "container" : "container active"} id="container">
                <div className="form-container sign-up">
                    <form>
                        <h1>Create account</h1>
                        <div className="social-icons">
                            <a href="https://www.facebook.com">
                                <FontAwesomeIcon icon="fa-brands fa-facebook" />
                            </a>
                            <a href="https://mail.google.com">
                                <FontAwesomeIcon icon="fa-brands fa-google-plus-g" />
                            </a>
                        </div>
                        <span>
                            or use your email for registration
                        </span>
                        <input type="text" placeholder='Name' />
                        <input type="email" placeholder='Email' />
                        <input type="password" placeholder='Password' />
                        <input type="password" placeholder='Confirm Password' />
                        <button onClick={(e) => {
                            e.preventDefault();
                            alert("Sign up successfully");
                        }}>Sign Up</button>
                    </form>
                </div>

                <div className="form-container sign-in">
                    <form action="">
                        <h1>Sign In</h1>
                        <div className="social-icons">
                            <a href="https://www.facebook.com">
                                <FontAwesomeIcon icon="fa-brands fa-facebook" />
                            </a>
                            <a href="https://mail.google.com">
                                <FontAwesomeIcon icon="fa-brands fa-google-plus-g" />
                            </a>
                        </div>
                        <span>
                            or use your email and password
                        </span>
                        <input type="email" placeholder='Email' />
                        <input type="password" placeholder='Password' />
                        <a href="https://www.youtube.com">Forget Your Password?</a>
                        <button onClick={(e) => {
                            e.preventDefault();
                            alert("Sign in successfully");
                        }}>Sign In</button>
                    </form>
                </div>
                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h1>Welcome Back!</h1>
                            <p>Sign in to access all features of the site</p>
                            <button className="hidden" id='login' onClick={handleToggle}>Sign In</button>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <h1>Greetings!</h1>
                            <p>Sign up now to access all features of the site</p>
                            <button className="hidden" id='register' onClick={handleToggle}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;