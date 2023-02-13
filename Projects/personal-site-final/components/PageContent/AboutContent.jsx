import styled from "@emotion/styled";
const { motion } = require("framer-motion");

import {
  StyledHeader,
  StyledBodyLeft,
  StyledBodyRight,
  StyledContentColumn,
  StyledBodyCenter,
} from "../MainStyledComponents";

export default function AboutContent() {
  return (
    <StyledContentColumn>
      <StyledHeader
        initial={{ y: "4rem", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        ABOUT ME
      </StyledHeader>
      <StyledBodyLeft
        initial={{ y: "4rem", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        {`👋 My name is Frank! I am a software engineer that graduated from the master's program of The University of Texas at Rio Grande Valley \n`}
      </StyledBodyLeft>
      <StyledBodyLeft
        initial={{ y: "4rem", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        {`Though I am in the early stages of my career, I absolutely love front-end development and I am passionate about creating beautiful, functional, and user-friendly websites that are also showy at times. 😝 \n`}
      </StyledBodyLeft>
      <StyledBodyRight
        initial={{ y: "4rem", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        {`Currently I am looking for a position in the field of web development/front-end engineering. I have a combined experience of about 2 years in the field of software engineering and web development. The details of projects I have done can be found under 
        the projects tab.  \n`}
      </StyledBodyRight>
      <StyledBodyLeft
        initial={{ y: "4rem", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        {`When I am not coding, I enjoy listening to music, collecting vinyl records, playing video games, watching anime, and spending time with my friends and family. \n`}
      </StyledBodyLeft>
      <StyledBodyRight
        initial={{ y: "4rem", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        {`If you would like to get in touch with me, please feel free to look at my contact information under the contact tab. I'm always open to scheduling chats! \n`}
      </StyledBodyRight>
      <StyledBodyCenter
        initial={{ y: "4rem", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        {`Thank you for reading! 😃 \n`}
      </StyledBodyCenter>
    </StyledContentColumn>
  );
}
