import styled from "@emotion/styled";
import { motion } from "framer-motion";
import theme from "./config";

export const HeaderWrapperUp = styled(motion.header)`
    label: HeaderWrapper;
    background-color: ${theme.backgroundColor};
`
export const HeaderWrapper = styled.div`
    label: HeaderWrapper;
    height: 60px;
    position: sticky;
    top: 0;
    z-index: 100;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0.5rem 0;
`
export const HeaderLogo = styled.img`
    label: HeaderLogo;
    margin: 1rem;
    width: 5rem;
    object-fit: contain;
`
export const HeaderSearch = styled.div`
    label: HeaderSearch;
    display: flex;
    flex: 1;
    align-items: center;
    border-radius: 24px;
    svg {
        label: svg;
        padding: 5px;
        height: 22px !important;
        background-color: ${theme.textBackgroundColor};
        margin-left: -29px;
    }
`
export const HeaderSearchInput = styled.input`
    label: HeaderSearchInput ;
    height: 2rem;
    padding: 1rem;
    border: none;
    width: 100%;
`
export const HeaderNav = styled.div`
    label: HeaderNav ;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-evenly;
`
export const HeaderOption = styled.div`
    label: HeaderOption ;
    display: flex;
    flex-direction: column;
    color: ${theme.primary};
    margin-right: 10px;
    margin-left: 10px;
`
export const HeaderOptionLineOne = styled.div`
    label: HeaderOptionLineOne;
    font-size: 10px;
`
export const HeaderOptionLineTwo = styled.div`
    label: HeaderOptionLineTwo;
    font-size: 13px;
    font-weight: 800;
`
export const HeaderOptionBasket = styled.div`
    label: HeaderOptionBasket ;
    display: flex;
    color: ${theme.primary};
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 0.5rem;
`
export const HeaderBasketCount = styled.div`
    label: HeaderBasketCount ;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 13px;
    font-weight: 800;
`