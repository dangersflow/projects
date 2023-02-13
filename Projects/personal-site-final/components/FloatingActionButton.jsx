import react from "react";
import styled from "@emotion/styled";
const { motion } = require("framer-motion");

const FloatingActionButtonStyled = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #000000;
  width: 5vh;
  height: 5vh;
  color: white;
  position: absolute;
  top: 20px;
  left: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export default function FloatingActionButton(props) {
  return (
    <>
      <FloatingActionButtonStyled>X</FloatingActionButtonStyled>
    </>
  );
}
