import styled from "@emotion/styled";
import { motion } from "framer-motion";
import theme from "./config";

export const HeaderWrapperUp = styled(motion.header)`
    label: HeaderWrapperUp;
    background-color: ${theme.backgroundColor};
`
export const HeaderWrapper = styled.div`
    label: HeaderWrapper;
    display: flex;
    height: 60px;
    position: sticky;
    top: 0;
    z-index: 100;
    height: auto;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 1rem 0;
    gap: 1rem;
    & > a {
        width: 4.5rem;
    }
`
export const HeaderLogo = styled.img`
    label: HeaderLogo;
    width: 100%;
    height: 2.3rem;
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