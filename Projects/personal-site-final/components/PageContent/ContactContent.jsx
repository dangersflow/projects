/* eslint-disable @next/next/no-img-element */
import styled from "@emotion/styled";
const { motion } = require("framer-motion");

import {
  StyledHeader,
  StyledBodyLeft,
  StyledBodyRight,
  StyledContentColumn,
  StyledBodyCenter,
} from "../MainStyledComponents";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import TechBubble from "../TechBubble";
import { TbMail } from "react-icons/tb";
import { TbPhone } from "react-icons/tb";

export default function ContactContent() {
  return (
    <StyledContentColumn
      style={{
        height: "100vh",
      }}
    >
      <StyledHeader
        initial={{ y: "4rem", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
      >
        CONTACT
      </StyledHeader>
      <StyledContentColumn style={{ justifyContent: "center" }}>
        <TechBubble
          href={"https://www.linkedin.com/in/francisco-gonzalez-861333134/"}
          icon={<FaLinkedin size={100} style={{ padding: "1rem" }} />}
          label={"LinkedIn"}
        />
        <TechBubble
          href={"https://github.com/dangersflow"}
          icon={<FaGithub size={100} style={{ padding: "1rem" }} />}
          label={"GitHub"}
        />
        <TechBubble
          href={"mailto:pacog879@hotmail.com"}
          icon={<TbMail size={100} style={{ padding: "1rem" }} />}
          label={"pacog879@hotmail.com"}
        />
        <TechBubble
          href={"tel:956-558-0130"}
          icon={<TbPhone size={100} style={{ padding: "1rem" }} />}
          label={"956-558-0130"}
        />
      </StyledContentColumn>
    </StyledContentColumn>
  );
}
