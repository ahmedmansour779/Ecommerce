import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../images/login-logo-black.png"
import { HeaderLogo } from '../styles/headerStyle'
import { LogIn, LoginContainer, LoginRegisterBtn, LoginSignInBtn } from '../styles/loginStyle'

export default function Login() {
    return (
        <LogIn
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}>
            <Link to="/">
                <HeaderLogo src={Logo} alt='logo-img' />
            </Link>
            <LoginContainer>
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="email" placeholder="Email" />
                    <h5>Password</h5>
                    <input type="password" placeholder="password" />
                    <LoginSignInBtn type='submit'>Sign in</LoginSignInBtn>
                    <p>
                        By counting, you agree to Amazon's Fake Clone Conditions of Use and Privacy Notice.
                    </p>
                    <hr />
                    <LoginRegisterBtn>
                        Create your Amazon Account
                    </LoginRegisterBtn>
                </form>
            </LoginContainer>
        </LogIn>
    )
}
