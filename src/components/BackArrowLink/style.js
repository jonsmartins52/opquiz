import styled from "styled-components";
import Link from "../Link";

export const StyledLink = styled(Link)`
  transition: 0.3s;
  &:hover {
    opacity: 0.5;
  }
`;

export const SVG = styled.svg`
  vertical-align: middle;
`;
