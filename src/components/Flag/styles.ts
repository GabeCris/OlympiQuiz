import styled from "styled-components";
import { theme } from "@src/styles/theme";

const { colors} = theme;

export const Flag = styled.img`
  width: 28px;
  height: 20px;
  border-radius: 2px;
  background-color: ${colors.gray};
`