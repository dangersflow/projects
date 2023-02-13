import Col from "../Col";
import styled from "@emotion/styled";
import SideBarDivider from "./SideBarDivider";
import SideBarHome from "./SideBarHome";
import SideBarAbout from "./SideBarAbout";
import SideBarProjects from "./SideBarProjects";
import SideBarContact from "./SideBarContact";

const StyledSideBar = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  width: 30rem;
  border-right: 2px solid #000000;
  position: fixed;

  @media (max-width: 767px) {
    display: none;
  }
  @media (min-width: 768px) {
    display: none;
  }
  @media (min-width: 1024px) {
    display: flex;
    width: 20rem;
  }
  @media (min-width: 1280px) {
    width: 20rem;
  }
  @media (min-width: 1600px) {
    width: 30rem;
  }
  @media (min-width: 1920px) {
  }
  @media (min-width: 2560px) {
  }
`;

export default function MainSideBarDesktop() {
  return (
    <>
      <StyledSideBar>
        <SideBarHome />
        <SideBarDivider />
        <SideBarAbout />
        <SideBarDivider />
        <SideBarProjects />
        <SideBarDivider />
        <SideBarContact />
      </StyledSideBar>
    </>
  );
}
