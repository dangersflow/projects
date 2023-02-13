import react from "react";
import styled from "@emotion/styled";

const { motion, AnimatePresence } = require("framer-motion");

const StyledBackgroundWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${(props) => props.bg});
  background-repeat: "repeat";
  min-height: 100vh;

  margin-left: 30rem;

  @media (max-width: 767px) {
    margin-left: 0rem;
  }
  @media (min-width: 768px) {
    margin-left: 0rem;
  }
  @media (min-width: 1024px) {
    margin-left: 20rem;
  }
  @media (min-width: 1280px) {
    margin-left: 20rem;
  }
  @media (min-width: 1600px) {
    margin-left: 30rem;
  }
  @media (min-width: 1920px) {
  }
  @media (min-width: 2560px) {
  }
`;

export default function BackgroundWrapper(props) {
  console.log(props.bg + " is the background image");
  return (
    <AnimatePresence>
      <StyledBackgroundWrapper
        bg={props.bg}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {props.children}
      </StyledBackgroundWrapper>
    </AnimatePresence>
  );
}
