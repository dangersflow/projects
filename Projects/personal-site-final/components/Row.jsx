import styled from "@emotion/styled";
import { HTMLAttributes } from "react";
import HTMLDivElement from "react";

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function Row(props) {
  return <StyledRow {...props} />;
}
