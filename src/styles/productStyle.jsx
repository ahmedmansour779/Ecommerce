import styled from "@emotion/styled";
import { motion } from "framer-motion";
import theme from "./config";

export const ProductWrapper = styled(motion.div)`
    label: ProductWrapper;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    flex-direction: column;
    z-index: 1;
    min-width: 23%;
    padding: 20px;
    background-color: ${theme.primary};
    transition: background 0.3s ease;
    
    &:hover {
        background-color: ${theme.backgroundColor};
        color: ${theme.primary};
        img {
            transform: scale(1.1);
        }
    }
    img {
        width: 100%;
        max-height: 200px;
        object-fit: contain;
        margin-bottom: 15px;
        transition: all 0.3s ease;
    }
    button {
        display: block;
        margin: 10px auto 0;
        background-color: ${theme.textBackgroundColor};
        border: none;
        color: ${theme.backgroundColor};
        cursor: pointer;
        width: 150px;
        height: 35px;
        border-radius: 5px;
        transition: transform 0.3s ease;
        &:active {
            transform: scale(0.8);
        }
    }
`
export const ProductInfo = styled.div`
    label: ProductInfo;
    width: 100%;
    min-height: 100px;
`
export const ProductPrice = styled.p`
    label: ProductPrice;
    margin-top: 5px;
`
export const RatingWrapper = styled.div`
    label: RatingWrapper;
    margin-bottom: 1.5rem;
`
