import styled from "@emotion/styled";
import { HTMLAttributes } from "react";
import HTMLDivElement from "react";

const StyledCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Col(props) {
  return <StyledCol {...props} />;
}
