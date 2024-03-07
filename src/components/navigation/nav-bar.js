import React, { useEffect, useState } from "react";
import { NavBarContainer } from "./nav-bar.styles";
import { animate } from "framer-motion";
import {
  faContactCard,
  faEnvelope,
  faHandshake,
  faHome,
  faImages,
  faInfo,
  faNewspaper,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomLink from "../CustomLink";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import LinkButton from "../LinkButton";
import Hamburger from "../Hamburger";

function NavBar() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  const controlNavbar = () => {
    const container = document.querySelector(".main-layout");
    if (container) {
      const winScroll = container.scrollTop;

      if (winScroll > lastScrollY) {
        // if scroll down hide the navbar
        animate(
          ".main-nav",
          { y: "-100%" },
          {
            duration: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }
        );
        setHasScrolled(false);
      } else {
        // if scroll up show the navbar

        animate(
          ".main-nav",
          { y: "0%" },
          {
            duration: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }
        );
        setHasScrolled(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(winScroll);
    }
  };

  useEffect(() => {
    const container = document.querySelector(".main-layout");

    if (container) {
      container.addEventListener("scroll", controlNavbar);
      // cleanup function
      return () => {
        container.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <NavBarContainer
      className="main-nav"
      $scrollUp={hasScrolled}
      $isTop={lastScrollY < 200}
      $openNav={openNav}
    >
      <CustomLink className="logo" href="/">
        <Image
          height={80}
          width={86.5}
          loading="eager"
          src={Logo}
          alt="logo"
          priority
        />
      </CustomLink>
      <div className="unsplash">
        <CustomLink className="navLinks" href="/">
          <span className="navIndex">
            <FontAwesomeIcon icon={faHome} />
          </span>
          <span>Home</span>
        </CustomLink>
        <CustomLink className="navLinks" href="about-us">
          <span className="navIndex">
            <FontAwesomeIcon icon={faQuestionCircle} />
          </span>
          <span>About Us</span>
        </CustomLink>
        <CustomLink className="navLinks" href="people">
          <span className="navIndex">
            <FontAwesomeIcon icon={faContactCard} />
          </span>
          <span>Our Team</span>
        </CustomLink>
        <CustomLink className="navLinks" href="expertise">
          <span className="navIndex">
            <FontAwesomeIcon icon={faHandshake} />
          </span>
          <span>Expertise</span>
        </CustomLink>
        <CustomLink className="navLinks" href="gallery">
          <span className="navIndex">
            <FontAwesomeIcon icon={faImages} />
          </span>
          <span>Gallery</span>
        </CustomLink>
        <CustomLink className="navLinks" href="contact">
          <span className="navIndex">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <span>Contact us</span>
        </CustomLink>
      </div>
      <Hamburger
        opened={openNav}
        open={() => {
          setOpenNav((prevState) => !prevState);
        }}
      />
      <div className="navDrop">
        <div className="mobile-links">
          <CustomLink className="navLinks" href="/">
            <span className="navIndex">
              <FontAwesomeIcon icon={faHome} />
            </span>
            <span>Home</span>
          </CustomLink>
          <CustomLink className="navLinks" href="about-us">
            <span className="navIndex">
              <FontAwesomeIcon icon={faQuestionCircle} />
            </span>
            <span>About Us</span>
          </CustomLink>
          <CustomLink className="navLinks" href="people">
            <span className="navIndex">
              <FontAwesomeIcon icon={faContactCard} />
            </span>
            <span>Our Team</span>
          </CustomLink>
          <CustomLink className="navLinks" href="expertise">
            <span className="navIndex">
              <FontAwesomeIcon icon={faHandshake} />
            </span>
            <span>Expertise</span>
          </CustomLink>
          <CustomLink className="navLinks" href="gallery">
            <span className="navIndex">
              <FontAwesomeIcon icon={faImages} />
            </span>
            <span>Gallery</span>
          </CustomLink>
          <CustomLink className="navLinks" href="contact">
            <span className="navIndex">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <span>Contact us</span>
          </CustomLink>
        </div>
      </div>
    </NavBarContainer>
  );
}

export default NavBar;
