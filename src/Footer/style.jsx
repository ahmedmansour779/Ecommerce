import styled from "@emotion/styled";
import { motion } from "framer-motion";
import theme from "../styles/config";

export const FooterWrapper = styled(motion.section)`
    label: FooterWrapper;
    padding: 2rem;
    text-align: center;
    color: ${theme.textBackgroundColor};
    background-color: ${theme.backgroundColor};
`
export const MadeBy = styled("span")`
    label: MadeBy;
    color: red;
    font-weight: bold;
`
export const Ul = styled("ul")`
    label: Ul;
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
`
export const Li = styled("li")`
    label: Li;
    display: flex;
    width: 1rem;
    height: 1rem;
    border-radius: 10px;
    border: 1px solid ${theme.primary};
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    padding: 1.4rem;
    &:hover {
        background-color: ${theme.textBackgroundColor};
    }
`