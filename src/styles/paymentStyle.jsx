import styled from "@emotion/styled";
import { motion } from "framer-motion";
import theme from "./config";

export const PaymentWrapper = styled(motion.div)`
    label: PaymentWrapper;
    display: flex;
    flex-direction: column;
    h1 {
        border-bottom: 1px solid #d3d3d3;
        font-weight: 400;
        padding: 1rem;
        text-align: center;
        color: ${theme.backgroundColor};
        span {
            color: ${theme.textBackgroundColor}
        }
    }
`
export const PaymentSection = styled.div`
    label: PaymentSection;
    display: flex;
    border-bottom: 1px solid #d3d3d3;
    padding: 1rem;
    flex-wrap: wrap;
    gap: 1rem;
    & > h3 {
        min-width:35% ;
    }
    & > div, & > form {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 1rem;
        width: 30rem;
    }
    button {
        background-color: ${theme.textBackgroundColor};
        border: 1px solid;
        margin-top: 10px;
        border-color: ${theme.secondary};
        color: ${theme.secondary};
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 5px;
        transition: transform 0.3s ease;
        width: fit-content;
        &:active {
            transform: scale(0.8);
        }
    }
`
export const CreditCart = styled.section`
    label: CreditCart;
    width: 100%;
`