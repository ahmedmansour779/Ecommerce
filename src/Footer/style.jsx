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