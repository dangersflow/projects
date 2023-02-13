import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const StyledTechBubble = styled(motion.a)`
  display: flex;
  flex-direction: row;
  background-color: white;
  font-weight: bold;
  font-family: "RNSReg", sans-serif;
  border-radius: 50px;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
  color: black;
`;

const StyledTechBubbleLabel = styled(motion.div)`
  font-size: 1.8rem;
  padding-right: 1rem;
`;

export default function TechBubble(props) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <StyledTechBubble
      animate={{
        width: isHovering ? "auto" : "auto",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      target="_blank"
      {...props}
    >
      {props.icon}
      {
        <AnimatePresence>
          {isHovering ? (
            <StyledTechBubbleLabel
              key="tech-bubble-label"
              initial={{ opacity: 0, fontSize: "0rem", x: "-100%" }}
              animate={{ opacity: 1, fontSize: "1.8rem", x: "0%" }}
              exit={{
                opacity: 0,
                fontSize: "0rem",
                paddingRight: "0rem",
                x: "-100%",
                width: "0rem",
              }}
            >
              {props.label}
            </StyledTechBubbleLabel>
          ) : null}
        </AnimatePresence>
      }
    </StyledTechBubble>
  );
}
