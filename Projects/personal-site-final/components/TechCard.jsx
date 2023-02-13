import Col from "./Col";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useState } from "react";

const StyledTechCard = styled(motion.a)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-radius: 5px;
  border: 1px solid white;
  position: relative;

  &:hover {
    cursor: pointer;
  }
`;

export default function TechCard(props) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <StyledTechCard
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        scale: isHovering ? 1.3 : 1,
      }}
      transition={{
        duration: 0.3,
        type: "spring",
      }}
      target="_blank"
      {...props}
    >
      {props.children}
    </StyledTechCard>
  );
}
