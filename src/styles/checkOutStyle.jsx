import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const CheckOutWrapper = styled(motion.div)`
    label: CheckOutWrapper;
    display: flex;
    padding: 20px;
    background-color: white;
    height: max-content;
    flex-direction: column;
`
export const CheckoutAd = styled.img`
    label: CheckoutAd;
    width: 100%;
    margin-bottom: 10px;
`
export const CheckoutTitle = styled.h2`
    label: CheckoutTitle;
    margin-right: 15px;
    padding: 10px;
    border-bottom: 1px solid lightgray;
`
export const CheckOutHeader = styled.div`
    label: CheckOutHeader;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: space-between;
`
export const CheckOutLeft = styled.div`
    label: CheckOutLeft;
    width: 70%;
    @media (max-width: 1024px) {
        width: 100%;
    }
`