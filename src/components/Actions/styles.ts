import styled from "styled-components";
import { theme } from "@src/styles/theme";
import { motion } from "framer-motion";

const { spacing } = theme;

export const Actions = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: ${spacing.medium};
  width: 100%;

  button{
    min-width: 64px;
  }
`;
