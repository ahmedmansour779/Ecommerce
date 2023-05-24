import styled from "@emotion/styled";
import theme from "../styles/config";

export const ScrollButton = styled.button`
    label: ScrollButton;
    position: fixed;
    width: 4rem;
    height: 4rem;
    background-color: ${theme.backgroundColor};
    bottom: 2rem;
    right: 2rem;
    border: 1px solid ${theme.textBackgroundColor};
    color: ${theme.textBackgroundColor};
    border-radius: 10px;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    opacity: 0.5;
    cursor: pointer;
    transition: 0.3s;
    z-index: 5;
    &:hover {
        opacity: 1;
        transition: 0.3s;
    }
`