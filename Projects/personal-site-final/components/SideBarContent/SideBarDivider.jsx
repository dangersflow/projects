import React from "react";
import styled from "@emotion/styled";

const StyledDivider = styled.div`
  display: flex;
  border-top: 1px solid #d1c5c0;
  width: 30%;
`;

export default function SideBarDivider() {
  return <StyledDivider />;
}
