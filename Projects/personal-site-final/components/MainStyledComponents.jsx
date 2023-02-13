import styled from "@emotion/styled";
const { motion } = require("framer-motion");

export const StyledContentColumn = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 5rem;
    z-index: 1;

    max-width: 150rem;

    @media(min-width: 0px) {
      padding: 3rem;
      padding-top: 5rem;
    }
    @media(min-width: 768px) {
      padding: 5rem;
    }
}`;

export const StyledContentColumnTimeline = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-content: center;
    height: 100%;
    width: 100%;
    padding: 5rem;
    z-index: 1;

    max-width: 150rem;

    @media (min-width: 0px) {
      padding: 0rem;
      padding-top: 5rem;
      align-content: start;
    }
    @media (min-width: 1024px) {
      align-content: start;
      padding: 1rem;
    }
    @media (min-width: 1440px) {
      align-content: start;
      padding: 2rem;
  }
}`;

export const StyledHeader = styled(motion.div)`
    font-size: 5rem;
    padding-bottom: 10rem;
    font-family: "RNSReg", sans-serif;
    color: white;
    text-align: center;

    @media (min-width: 0px) {
        font-size: 2rem;
        padding-bottom: 1.5rem;
    }
    @media (min-width: 400px){
        font-size: 2.5rem;
        padding-bottom: 2rem;
    }
    @media (min-width: 767px) {
      font-size: 3rem;
      padding-bottom: 3rem;
    }
    @media (min-width: 768px) {
      font-size: 3rem;  
      padding-bottom: 3rem;
    }
    @media (min-width: 1024px) {
      font-size: 3rem;
      padding-bottom: 5rem;
    }
    @media (min-width: 1600px) {
      font-size: 4rem;
      padding-bottom: 10rem;
    }
    @media (min-width: 2225px) {
      font-size: 5rem;
    }
}`;

export const StyledTimelineBody = styled(motion.a)`
  display: block;
  font-size: 1.5rem;
  font-family: "RNSLight", sans-serif;
  color: white;
  padding: 4rem;
  background-color: rgba(76, 67, 70, 0.25);
  backdrop-filter: blur(15px);
  border-radius: 10px;
  border-left: 3px solid yellow;
  border-right: 3px solid yellow;
  width: auto;
  white-space: pre-line;

  @media (min-width: 0px) {
    padding: 1rem;
    min-width: 13rem;
  }
  @media (min-width: 400px) {
    padding: 1rem;
    min-width: 20rem;
  }
  @media (min-width: 767px) {
    padding: 2rem;
  }
  @media (min-width: 1024px) {
    padding: 4rem;
  }
`;

export const StyledTimelineHeader = styled(motion.div)`
  font-size: 2.5rem;
  font-family: "RNSReg", sans-serif;
  color: white;
  padding-bottom: 2rem;

  @media (min-width: 0px) {
    font-size: 1.5rem;
  }
  @media (min-width: 767px) {
    font-size: 1.8rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.8rem;
  }
  @media (min-width: 1600px) {
    font-size: 2.5rem;
  }
`;

export const StyledTimelineBodyText = styled(motion.div)`
  font-size: 1.5rem;
  font-family: "RNSReg", sans-serif;
  color: white;
  padding-bottom: 2rem;

  @media (min-width: 0px) {
    font-size: 1rem;
  }
  @media (min-width: 767px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1600px) {
    font-size: 1.5rem;
  }
`;

export const StyledTimelineChipRow = styled(motion.div)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const StyledTimelineSubtitle = styled(motion.div)`
  font-size: 1rem;
  font-family: "RNSReg", sans-serif;
  color: white;
  padding-bottom: 2rem;

  @media (min-width: 0px) {
    font-size: 0.7rem;
  }
  @media (min-width: 767px) {
    font-size: 0.9rem;
  }
  @media (min-width: 1024px) {
    font-size: 0.9rem;
  }
  @media (min-width: 1600px) {
    font-size: 1rem;
  }
`;

export const StyledBodyRight = styled(motion.div)`
    font-size: 1.5rem;
    font-family: "RNSLight", sans-serif;
    color: white;
    margin-left: 0rem;
    padding: 4rem;
    margin-bottom: 5rem;
    background-color: rgba(76, 67, 70, .25);  
    backdrop-filter: blur(15px);
    border-radius: 10px;
    border-right: 3px solid yellow;

    @media (min-width: 0px) {
      font-size: 1rem;
      padding: 2rem;
      margin-right: 0rem;
    }
    @media (min-width: 400px) {
      font-size: 1.2rem;
      padding: 2rem;
    }
    @media (min-width: 767px) {
      padding: 4rem;
      font-size: 1.5rem;
      margin-left: 50%;
    }
    @media (min-width: 768px) {
      padding: 4rem;
      margin-left: 50%;
      font-size: 1.5rem;
    }
    @media (min-width: 1024px) {
      font-size: 1.5rem;
    }
    @media (min-width: 1600px) {
      font-size: 2rem;
    }
    @media (min-width: 1920px) {
    }
    @media (min-width: 2560px) {
    }
}`;

export const StyledBodyLeft = styled(motion.div)`
    font-size: 2rem;
    font-family: "RNSLight", sans-serif;
    color: white;
    margin-right: 50%;
    padding: 4rem;
    margin-bottom: 5rem;
    position: relative;
    background-color: rgba(76, 67, 70, .25);  
    backdrop-filter: blur(15px);
    border-radius: 10px;
    border-left: 3px solid yellow;

    @media (min-width: 0px) {
      font-size: 1rem;
      padding: 2rem;
      margin-right: 0rem;
    }
    @media (min-width: 400px) {
      font-size: 1.2rem;
      padding: 2rem;
    }
    @media (min-width: 767px) {
      padding: 4rem;
      font-size: 1.5rem;
      margin-right: 50%;
    }
    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
    @media (min-width: 1024px) {
      font-size: 1.5rem;
    }
    @media (min-width: 1600px) {
      font-size: 2rem;
    }
    @media (min-width: 1920px) {
    }
    @media (min-width: 2560px) {
    }
}`;

export const StyledBodyLeftAlt = styled(motion.div)`
  font-size: 2rem;
  font-family: "RNSLight", sans-serif;
  color: white;
  padding: 4rem;
  position: relative;
  background-color: rgba(76, 67, 70, 0.25);
  backdrop-filter: blur(15px);
  border-radius: 10px;
  border-left: 3px solid yellow;

  @media (min-width: 0px) {
    font-size: 1rem;
    padding: 2rem;
  }
  @media (min-width: 400px) {
    font-size: 1.2rem;
    padding: 2rem;
  }
    @media (min-width: 767px) {
      padding: 4rem;
      font-size: 1.5rem;
      margin-right: 0rem;
    }
    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
    @media (min-width: 1024px) {
      font-size: 1.5rem;
    }
    @media (min-width: 1600px) {
      font-size: 2rem;
    }
    @media (min-width: 1920px) {
    }
    @media (min-width: 2560px) {
    }
  }
`;

export const StyledBodyCenter = styled(motion.div)`
    font-size: 2rem;
    font-family: "RNSLight", sans-serif;
    color: white;
    padding: 4rem;
    margin-bottom: 5rem;
    position: relative;
    background-color: rgba(76, 67, 70, .25);  
    backdrop-filter: blur(15px);
    border-radius: 10px;
    border-left: 3px solid yellow;
    border-right: 3px solid yellow;

    @media (min-width: 0px) {
      font-size: 1rem;
      padding: 2rem;
    }
    @media (min-width: 400px) {
      font-size: 1.2rem;
      padding: 2rem;
    }
    @media (min-width: 767px) {
      padding: 4rem;
      font-size: 1.5rem;
    }
    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
    @media (min-width: 1024px) {
      font-size: 1.5rem;
    }
    @media (min-width: 1600px) {
      font-size: 2rem;
    }
    @media (min-width: 1920px) {
    }
    @media (min-width: 2560px) {
    }
}`;

export const StyledSideBarItem = styled(motion.a)`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: transparent;
  transition: all 0.2s ease-in-out;
  width: 100%;
  height: 12%;
  cursor: pointer;
  font-family: "Asher", sans-serif;
  border: none;

  :hover {
    background-color: #fcec0c;
  }

  media (min-width: 768px) {
  }
  media (min-width: 1024px) {
  }
  media (min-width: 1280px) {
  }
  media (min-width: 1600px) {
  }
  media (min-width: 1920px) {
  }
  media (min-width: 2560px) {
  }
`;

export const StyledCharacter = styled(motion.span)`
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 3rem;
  height: 50%;
  align-items: center;
  justify-content: center;

  media (min-width: 768px) {
    font-size: 2rem;
  }
  media (min-width: 1024px) {
  }
  media (min-width: 1280px) {
  }
  media (min-width: 1600px) {
  }
  media (min-width: 1920px) {
  }
  media (min-width: 2560px) {
  }
`;

export const TechBubble = styled(motion.a)`
  display: flex;
  flex-direction: row;
  position: relative;
  background-color: white;
  border-radius: 50px;
`;

export const DoubleColumnStyleCol = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: space-evenly;
  justify-content: space-evenly;
  width: 50%;

  @media (max-width: 1023px) {
    width: 100%;
  }
`;
