import styled from "@emotion/styled";
import { motion } from "framer-motion";
import theme from "./config";

export const LogIn = styled(motion.div)`
    label: LogIn;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-color: ${theme.primary};
    margin-top: 2rem;
    gap: 2rem;
`
export const LoginLogo = styled.div`
    label: LoginLogo;
    margin-top: 20px;
    margin-bottom: 20px;
    object-fit: contain;
    width: 100px;
    margin-right: auto;
    margin-left: auto;
`
export const LoginContainer = styled.div`
    label: LoginContainer;
    width: 300px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    border: 1px solid lightgray;
    padding: 20px;
    background: ${theme.backgroundColor};
    color: ${theme.primary};
    h1 {
        label: h1;
        font-weight: 500;
        margin-bottom: 20px;    
    }
    p {
        font-size: 12px;
        margin-top: 15px;
    }
    form {
        h5 {
            margin-bottom: 5px;
        }
        input {
            height: 30px;
            margin: 0.2rem 0;
            background: none;
            width: 100%;
            border: 1px solid ${theme.secondary};
            padding: 0.5rem;
            transition: 0.2s ease-in all;
            background-color: ${theme.primary};
        }
    }
`
export const LoginSignInBtn = styled.button`
    label: LoginSignInBtn;
    background-color: ${theme.textBackgroundColor};
    border: 1px solid;
    margin-top: 10px;
    border-color: ${theme.secondary};
    color: ${theme.secondary};
    cursor: pointer;
    width: 100%;
    height: 30px;
`
export const LoginRegisterBtn = styled.button`
    label: LoginRegisterBtn;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid ${theme.backgroundColor};
    cursor: pointer;
`