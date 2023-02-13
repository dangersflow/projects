import { useMediaQuery } from "react-responsive";
import MainSideBarMobile from "./MainSideBarMobile";
import MainSideBarDesktop from "./MainSideBarDesktop";

export default function SideBar() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1023px)" });

  return (
    <header>
      {isTabletOrMobile ? <MainSideBarMobile /> : <MainSideBarDesktop />}
    </header>
  );
}
