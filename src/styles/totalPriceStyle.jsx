import styled from "@emotion/styled";
import { motion } from "framer-motion";
import theme from "./config";

export const TotalPriceWrapper = styled(motion.div)`
    label: TotalPriceWrapper;
    background-color: #f3f3f3;
    border: 1px solid #ddd;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.5rem;
    width: auto;
    button {
        display: block;
        margin-top:0.5rem ;
        background-color: ${theme.textBackgroundColor};
        border: 1px solid;
        border-color: ${theme.secondary};
        color: ${theme.backgroundColor};
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 5px;
        transition: transform 0.3s ease;
        &:active {
            transform: scale(0.8);
        }
    }
`