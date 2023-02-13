import "../styles/globals.css";
import react, { useEffect, useState, useLayoutEffect } from "react";
import Col from "../components/Col";
import IntroSequence from "../components/IntroSequence";
import SideBar from "../components/SideBarContent/SideBar";
import { useShowIntro } from "../components/Store";
import useSessionStorage from "../components/UseSessionStorage";
import useSetSessionStorage from "../components/SetSessionStorage";

function MyApp({ Component, pageProps }) {
  const [temp, setTemp] = useState(
    typeof window !== "undefined"
      ? sessionStorage.getItem("showIntro") === "false"
        ? false
        : true
      : true
  );

  useEffect(() => {
    if (sessionStorage.getItem("showIntro") === "true") {
      setTemp(true);
    } else if (sessionStorage.getItem("showIntro") === "false") {
      setTemp(false);
    } else {
      sessionStorage.setItem("showIntro", "true");
      setTemp(true);
    }
  }, [temp]);

  const handleChange = (state) => {
    setTemp(state);
    sessionStorage.setItem("showIntro", state);
  };

  console.log("bruh: ", temp);

  return (
    <>
      {temp === true ? (
        <Col
          style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#000000",
          }}
        >
          <IntroSequence setShow={handleChange} />
        </Col>
      ) : (
        <>
          <SideBar />
          <Component />
        </>
      )}
    </>
  );
}

export default MyApp;
