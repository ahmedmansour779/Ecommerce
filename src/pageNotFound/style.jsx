import styled from "@emotion/styled";
import { motion } from "framer-motion";
import theme from "../styles/config";

export const PageNotFoundUp = styled.div`
    label: PageNotFoundUp;
    display: grid;
    justify-items: stretch;
    grid-template-rows: auto 91.5% auto;
    height: 100%;
    @media (max-width: 768px) {
        grid-template-rows: auto 57.5% auto;
    }
`
export const PageNotFoundWrapper = styled(motion.div)`
    label: PageNotFoundWrapper;
    background: ${theme.background};
    color: ${theme.secondary};
    padding: 2rem;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    h1, p {
        margin-top: 2rem;
    }
    img {
        width: 100%;
    }
`