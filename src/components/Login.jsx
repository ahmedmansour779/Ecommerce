import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from "../firebase"
import Logo from "../images/login-logo-black.png"
import { HeaderLogo } from '../styles/headerStyle'
import { LogIn, LoginContainer, LoginRegisterBtn, LoginSignInBtn } from '../styles/loginStyle'

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const signOut = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                if (auth) {
                    navigate("/")
                }
            })
            .catch((error) => {
                alert(error.message)
            })
    }
    const register = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                if (auth) {
                    navigate("/")
                }
            })
            .catch((error) => {
                alert(error.message)
            })
    }

    return (
        <LogIn
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}>
            <Link to="/">
                <HeaderLogo src={Logo} alt='logo-img' />
            </Link>
            <LoginContainer>
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <LoginSignInBtn
                        type='submit'
                        onClick={signOut}>Sign in</LoginSignInBtn>
                    <p>
                        By counting, you agree to Amazon's Fake Clone Conditions of Use and Privacy Notice.
                    </p>
                    <hr />
                    <LoginRegisterBtn onClick={register}>
                        Create your Amazon Account
                    </LoginRegisterBtn>
                </form>
            </LoginContainer>
        </LogIn>
    )
}