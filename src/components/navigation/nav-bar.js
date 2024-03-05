import React, { useEffect, useState } from "react";
import { NavBarContainer } from "./nav-bar.styles";
import { animate } from "framer-motion";
import {
  faBed,
  faBookJournalWhills,
  faEnvelope,
  faGifts,
  faHandshake,
  faHome,
  faImages,
  faInfo,
  faMartiniGlassCitrus,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomLink from "../CustomLink";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import LinkButton from "../LinkButton";
import Hamburger from "../Hamburger";
import { Header } from "../typography";

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
          height={60}
          width={64.5}
          loading="eager"
          src={Logo}
          alt="logo"
          priority
        />
        <Header>THE PEARL JABI LAKE</Header>
      </CustomLink>
      <div className="unsplash">
        <CustomLink className="navLinks" href="rooms">
          <span className="navIndex">
            <FontAwesomeIcon icon={faBed} />
          </span>
          <span>Rooms</span>
        </CustomLink>
        <CustomLink className="navLinks" href="events">
          <span className="navIndex">
            <FontAwesomeIcon icon={faHandshake} />
          </span>
          <span>Events</span>
        </CustomLink>
        <CustomLink className="navLinks" href="dining">
          <span className="navIndex">
            <FontAwesomeIcon icon={faMartiniGlassCitrus} />
          </span>
          <span>Restaurant and Bar</span>
        </CustomLink>
        <CustomLink className="navLinks" href="contact">
          <span className="navIndex">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <span>Contact us</span>
        </CustomLink>
        <LinkButton className="navLinks navBtn" href={"reservations"}>
          Book
        </LinkButton>
      </div>
      <Hamburger
        opened={openNav}
        open={() => {
          setOpenNav((prevState) => !prevState);
        }}
      />
      <div className="navDrop">
        <div className="mobile-links">
          <CustomLink className="navLinks" href="rooms">
            <span className="navIndex">
              <FontAwesomeIcon icon={faBed} />
            </span>
            <span className="nav-text">Rooms</span>
          </CustomLink>
          <CustomLink className="navLinks" href="events">
            <span className="navIndex">
              <FontAwesomeIcon icon={faHandshake} />
            </span>
            <span className="nav-text">Events</span>
          </CustomLink>
          <CustomLink className="navLinks" href="dining">
            <span className="navIndex">
              <FontAwesomeIcon icon={faMartiniGlassCitrus} />
            </span>
            <span className="nav-text">Restaurant and Bar</span>
          </CustomLink>
          <CustomLink className="navLinks" href="/gallery">
            <span className="navIndex">
              <FontAwesomeIcon icon={faImages} />
            </span>
            <span className="nav-text">Gallery</span>
          </CustomLink>
          <CustomLink className="navLinks" href="/offers">
            <span className="navIndex">
              <FontAwesomeIcon icon={faGifts} />
            </span>
            <span className="nav-text">Special Offers</span>
          </CustomLink>
          <CustomLink className="navLinks" href="/news">
            <span className="navIndex">
              <FontAwesomeIcon icon={faNewspaper} />
            </span>
            <span className="nav-text">
              News and Upcomming Events
            </span>
          </CustomLink>
          <CustomLink className="navLinks" href="/">
            <span className="navIndex">
              <FontAwesomeIcon icon={faBookJournalWhills} />
            </span>
            <span className="nav-text">Blog</span>
          </CustomLink>
          <CustomLink className="navLinks" href="/about">
            <span className="navIndex">
              <FontAwesomeIcon icon={faInfo} />
            </span>
            <span className="nav-text">About us</span>
          </CustomLink>
          <CustomLink className="navLinks" href="contact">
            <span className="navIndex">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <span className="nav-text">Contact us</span>
          </CustomLink>
          <LinkButton
            className="navLinks navBtn"
            href={"reservations"}
          >
            Book
          </LinkButton>
        </div>
        <div className="navDrop-links">
          <CustomLink href="/">
            <FontAwesomeIcon icon={faHome} /> Home
          </CustomLink>
          <CustomLink href="/about">
            <FontAwesomeIcon icon={faInfo} /> About us
          </CustomLink>
          <CustomLink href="/gallery">
            <FontAwesomeIcon icon={faImages} /> Gallery
          </CustomLink>
          <CustomLink href="/offers">
            <FontAwesomeIcon icon={faGifts} /> Special Offers
          </CustomLink>
          <CustomLink href="/news">
            <FontAwesomeIcon icon={faNewspaper} /> News and Upcomming
            Events
          </CustomLink>
          <CustomLink href="/">
            <FontAwesomeIcon icon={faBookJournalWhills} /> Blog
          </CustomLink>
          <CustomLink href="/contact">
            <FontAwesomeIcon icon={faEnvelope} /> Contact Us
          </CustomLink>
        </div>
      </div>
    </NavBarContainer>
  );
}

export default NavBar;
