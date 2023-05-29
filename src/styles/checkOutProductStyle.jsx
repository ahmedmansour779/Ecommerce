import styled from "@emotion/styled";
import { motion } from "framer-motion";
import theme from "./config";

export const CheckOutProductWrapper = styled(motion.div)`
    label: CheckOutProductWrapper;
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
    flex-wrap: wrap;
`
export const CheckOutProductImage = styled.img`
    label: CheckOutProductImage;
    object-fit: contain;
    width: 180px;
    height: 180px;
`
export const CheckoutProductInfo = styled.div`
    label: CheckoutProductInfo;
    padding-left: 20px;
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
        &:active {
            transform: scale(0.8);
        }
    }
`
export const CheckOutProductRating = styled.div`
    label: CheckOutProductRating;
    display: flex;
    p {
        width: 20px;
        margin: 0 5px;
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
`
export const CheckOutProductTitle = styled.p`
    label: CheckOutProductTitle;
    font-size: 17px;
    font-weight: 800;
`
export const CheckOutProductPrice = styled.p`
    label: ProductPrice;
    margin-top: 5px;
`
export const NotProduct = styled(motion.h3)`
    label: NotProduct;
    padding: 1rem;
    text-transform: capitalize;
    color: ${theme.backgroundColor};
`