import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { logo } from "../assets";
import { navigation } from "../constants";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";

import Button from "./Button";
import { useState } from "react";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toogleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
    setOpenNavigation(!openNavigation);
  };

  //! Handle scroll event
  const handleScroll = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm  ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      } `}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 ">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={logo} width={190} height={130} alt="brainwave" />
        </a>

        <nav
          className={` fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent  ${
            openNavigation ? "flex" : "hidden"
          }  `}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleScroll}
                className={`block relative font-code trxt-2xl uppercase text-n-1 transation-colors hover:text-color-1  ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold  ${
                  item.url === pathname.hash
                    ? " z-2 lg:text-color-1 font-bold"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-color-1 xl:px-12   `}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>

        <a
          href="https://app.sensormagics.com/login"
          target="_blank"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block "
        >
          Login
        </a>
        <Button className="hidden lg:flex" href={"https://app.sensormagics.com/support"}>
          get in touch
        </Button>

        <Button
          className={"ml-auto lg:hidden"}
          px={"px-3"}
          onClick={toogleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};
export default Header;
