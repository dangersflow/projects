import { useState } from "react";
const { AnimatePresence } = require("framer-motion");

import { StyledSideBarItem, StyledCharacter } from "../MainStyledComponents";

export default function SideBarProjects(props) {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleHoverEnter = () => {
    setIsHovering(true);
  };

  const handleHoverLeave = () => {
    setIsHovering(false);
  };

  const handleClickDown = () => {
    setIsClicked(true);
  };

  const handleClickUp = () => {
    setIsClicked(false);
  };

  return (
    <>
      <AnimatePresence initial={false}>
        <StyledSideBarItem
          onHoverStart={handleHoverEnter}
          onHoverEnd={handleHoverLeave}
          onMouseDown={handleClickDown}
          onMouseUp={handleClickUp}
          href="/projects"
        >
          <StyledCharacter
            animate={{
              x: isClicked ? (isHovering ? 0 : 0) : isHovering ? "-120%" : 0,
              y: isClicked ? (isHovering ? 0 : 0) : isHovering ? "60%" : 0,
              fontSize: isHovering ? (isClicked ? "3rem" : "4rem") : "3rem",
            }}
            style={{
              fontSize: "3rem",
              color: isHovering ? "black" : "white",
            }}
          >
            P
          </StyledCharacter>
          <StyledCharacter
            animate={{
              x: isClicked ? (isHovering ? 0 : 0) : isHovering ? "-80%" : 0,
              y: isClicked ? (isHovering ? 0 : 0) : isHovering ? "-30%" : 0,
              fontSize: isHovering ? (isClicked ? "3rem" : "2.5rem") : "3rem",
            }}
            style={{
              fontSize: "3rem",
              color: isHovering ? "black" : "white",
            }}
          >
            R
          </StyledCharacter>
          <StyledCharacter
            animate={{
              x: isClicked ? (isHovering ? 0 : 0) : isHovering ? "-30%" : 0,
              y: isClicked ? (isHovering ? 0 : 0) : isHovering ? "0%" : 0,
            }}
            style={{
              fontSize: "3rem",
              color: isHovering ? "black" : "white",
            }}
          >
            O
          </StyledCharacter>
          <StyledCharacter
            animate={{
              x: isClicked ? (isHovering ? 0 : 0) : isHovering ? "-30%" : 0,
              y: isClicked ? (isHovering ? 0 : 0) : isHovering ? "30%" : 0,
              fontSize: isHovering ? (isClicked ? "3rem" : "4rem") : "3rem",
              transition: {
                duration: 0.2,
                ease: "easeInOut",
              },
            }}
            style={{
              fontSize: "3rem",
              color: isHovering ? "black" : "white",
            }}
          >
            J
          </StyledCharacter>
          <StyledCharacter
            animate={{
              x: isClicked ? (isHovering ? 0 : 0) : isHovering ? "40%" : 0,
              y: isClicked ? (isHovering ? 0 : 0) : isHovering ? "-30%" : 0,
              fontSize: isHovering ? (isClicked ? "3rem" : "3rem") : "3rem",
              transition: {
                duration: 0.2,
                ease: "easeInOut",
              },
            }}
            style={{
              fontSize: "3rem",
              color: isHovering ? "black" : "white",
            }}
          >
            E
          </StyledCharacter>
          <StyledCharacter
            animate={{
              x: isClicked ? (isHovering ? 0 : 0) : isHovering ? "50%" : 0,
              y: isClicked ? (isHovering ? 0 : 0) : isHovering ? "30%" : 0,
              fontSize: isHovering ? (isClicked ? "3rem" : "3rem") : "3rem",
              transition: {
                duration: 0.2,
                ease: "easeInOut",
              },
            }}
            style={{
              fontSize: "3rem",
              color: isHovering ? "black" : "white",
            }}
          >
            C
          </StyledCharacter>
          <StyledCharacter
            animate={{
              x: isClicked ? (isHovering ? 0 : 0) : isHovering ? "200%" : 0,
              y: isClicked ? (isHovering ? 0 : 0) : isHovering ? "-30%" : 0,
              fontSize: isHovering ? (isClicked ? "3rem" : "3rem") : "3rem",
              transition: {
                duration: 0.2,
                ease: "easeInOut",
              },
            }}
            style={{
              fontSize: "3rem",
              color: isHovering ? "black" : "white",
            }}
          >
            T
          </StyledCharacter>
          <StyledCharacter
            animate={{
              x: isClicked ? (isHovering ? 0 : 0) : isHovering ? "200%" : 0,
              y: isClicked ? (isHovering ? 0 : 0) : isHovering ? "0%" : 0,
              fontSize: isHovering ? (isClicked ? "3rem" : "3rem") : "3rem",
              transition: {
                duration: 0.2,
                ease: "easeInOut",
              },
            }}
            style={{
              fontSize: "3rem",
              color: isHovering ? "black" : "white",
            }}
          >
            S
          </StyledCharacter>
        </StyledSideBarItem>
      </AnimatePresence>
    </>
  );
}
