/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styled from "@emotion/styled";
const { motion } = require("framer-motion");
import { useState } from "react";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiJavascript, SiCss3, SiHtml5 } from "react-icons/si";
import TechCard from "../TechCard";
import ProfilePic from "../../public/me.jpg";
import Image from "next/image";
import UTRGV from "../../public/utrgv.png";
import Zendesk from "../../public/zendesk.png";
import NSIN from "../../public/nsin.png";

import {
  StyledHeader,
  StyledBodyLeft,
  StyledContentColumn,
  StyledBodyCenter,
  StyledBodyLeftAlt,
  DoubleColumnStyleCol,
} from "../MainStyledComponents";
import TechBubble from "../TechBubble";

import Row from "../Row";
import Col from "../Col";

export default function HomeContent() {
  const [noDelay, setNoDelay] = useState(false);

  return (
    <StyledContentColumn>
      <StyledHeader
        initial={{ y: "4rem", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        FRANCISCO GONZALEZ
      </StyledHeader>
      <Row
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginBottom: "10rem",
          flexWrap: "wrap",
        }}
      >
        <DoubleColumnStyleCol
          style={{
            height: "100%",
            alignItems: "space-evenly",
            justifyContent: "space-evenly",
            minWidth: "200px",
          }}
        >
          <div style={{ paddingBottom: "5rem" }} />
          <StyledBodyLeftAlt
            style={{ width: "100%" }}
            initial={{ y: "4rem", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {`👋 Hello. My name is Frank! \n`}
          </StyledBodyLeftAlt>
          <div style={{ paddingBottom: "5rem" }} />
          <StyledBodyLeftAlt
            style={{ width: "100%" }}
            initial={{ y: "4rem", opacity: 0, animationDelay: "0.5s" }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {`🕸️ I'm a software engineer and a web developer. 🕸️  \n`}
          </StyledBodyLeftAlt>
          <div style={{ paddingBottom: "5rem" }} />
          <StyledBodyLeftAlt
            style={{ width: "100%" }}
            initial={{ y: "4rem", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >{`Thanks for stopping by! \n`}</StyledBodyLeftAlt>
          <div style={{ paddingBottom: "5rem" }} />
        </DoubleColumnStyleCol>
        <DoubleColumnStyleCol
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: "300px",
          }}
        >
          {/* <motion.div
            style={{
              backgroundImage: `url(${ProfilePic.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
            }}
            initial={{ y: "4rem", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          /> */}
          <motion.div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
            }}
            initial={{ y: "4rem", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div style={{ borderRadius: "20px", overflow: "hidden" }}>
              <StyledImage src={ProfilePic.src} alt="Frank's Profile" />
            </div>
          </motion.div>
        </DoubleColumnStyleCol>
      </Row>
      <div style={{ paddingBottom: "5rem" }} />
      <StyledBodyCenter
        initial={{ y: "4rem", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {`Tech Stack\n`}
      </StyledBodyCenter>
      <StyledBodyCenter
        initial={{ y: "4rem", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          position: "relative",
          paddingTop: "5rem",
          paddingBottom: "5rem",
        }}
        transition={{ delay: 0.6 }}
      >
        <TechCard href={"https://reactjs.org/"}>
          <FaReact size={100} color="white" />
          <StyledTechPadding />
          {`React`}
        </TechCard>
        <TechCard href={"https://nextjs.org/"}>
          <TbBrandNextjs size={100} color="white" />
          <StyledTechPadding />
          {`Next.js`}
        </TechCard>
        <TechCard href={"https://www.javascript.com/"}>
          <SiJavascript size={100} color="white" />
          <StyledTechPadding />
          {`JavaScript`}
        </TechCard>
        <TechCard
          href={
            "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics"
          }
        >
          <SiHtml5 size={100} color="white" />
          <StyledTechPadding />
          {`HTML`}
        </TechCard>
        <TechCard href={"https://developer.mozilla.org/en-US/docs/Web/CSS"}>
          <SiCss3 size={100} color="white" />
          <StyledTechPadding />
          {`CSS`}
        </TechCard>
      </StyledBodyCenter>

      <div style={{ paddingBottom: "15rem" }} />

      <StyledBodyCenter
        initial={{ y: "4rem", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {`Companies Worked At  \n`}
      </StyledBodyCenter>

      <StyledBodyCenter
        initial={{ y: "4rem", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        style={{
          display: "flex",
          width: "100%",
          paddingTop: "5rem",
          paddingBottom: "5rem",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          position: "relative",
        }}
        transition={{ delay: 0.7 }}
      >
        <TechBubble
          href={"https://www.utrgv.edu/"}
          icon={
            <img src={UTRGV.src} height={120} style={{ padding: "1rem" }} />
          }
          label={"UT at Rio Grande Valley"}
        />
        <TechBubble
          href={"https://www.nsin.mil/"}
          icon={
            <img
              src={NSIN.src}
              height={120}
              style={{ padding: "1rem 3rem 1rem 3rem" }}
            />
          }
          label={"NSIN X-Force"}
        />
        <TechBubble
          href={"https://www.zendesk.com/"}
          icon={
            <img src={Zendesk.src} height={120} style={{ padding: "1rem" }} />
          }
          label={"Zendesk"}
        />
      </StyledBodyCenter>
    </StyledContentColumn>
  );
}

const StyledTechPadding = styled.div`
  padding-bottom: 2rem;
`;

const ImageWrapper = styled.span`
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > span {
    box-sizing: content-box;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;
  }
`;

const StyledImage = styled.img`
  object-fit: contain;
  height: 55rem;

  @media (max-width: 767px) {
    height: 40rem;
  }
  @media (min-width: 768px) {
    height: 40rem;
  }
  @media (min-width: 1024px) {
    height: 50rem;
  }
  @media (min-width: 1600px) {
    height: 55rem;
  }
  @media (min-width: 1920px) {
  }
  @media (min-width: 2560px) {
  }
`;
