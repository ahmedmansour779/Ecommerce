import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const HomeComponent = styled(motion.div)`
    label: HomeComponent;
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 1500px;
    overflow: hidden;
`
export const HomeRow = styled.div`
    label: HomeRow;
    display: flex;
    z-index: 1;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 1rem;
    justify-content: space-between;
`
export const HomeImage = styled.img`
    label: HomeComponent;
    width: 100%;
    z-index: -1;
    margin-bottom: -150px;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`