import React from "react";
import Image from "next/image";
import CustomLink from "../CustomLink";
import {
  CopyrightsSectionContainer,
  FooterContainer,
  IconSectionContainer,
  NewsletterContainer,
} from "./footer.styles";
import { SectionHeader, Text } from "../typography";
import { TextInput } from "../TextInput";
import { Button } from "../Button";
import Logo from "../../../public/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <FooterContainer>
      <Newsletter />
      <IconSection />
      <CopyrightsSection />
    </FooterContainer>
  );
}

const CopyrightsSection = () => {
  return <CopyrightsSectionContainer></CopyrightsSectionContainer>;
};

const IconSection = () => {
  return (
    <IconSectionContainer>
      <CustomLink className="logo" href="/">
        <Image
          height={120}
          width={100}
          loading="eager"
          src={Logo}
          alt="logo"
          priority
        />
        <SectionHeader size="18px">The Pearl Jabi Lake</SectionHeader>
      </CustomLink>
      <div className="links">
        <div className="columns">
          <CustomLink href="/rooms">Rooms and Suites</CustomLink>
          <CustomLink href="/events">Events</CustomLink>
          <CustomLink href="/gallery">Gallery</CustomLink>
          <CustomLink href="/dining">Restaurants and Bar</CustomLink>
          <CustomLink href="/offers">Special Offers</CustomLink>
        </div>
        <div className="columns">
          <CustomLink href="/contact">Contact Us</CustomLink>
          <CustomLink href="/about-us">About Us</CustomLink>
          <CustomLink href="/news">News</CustomLink>
        </div>
        <div className="columns">
          <Text size="14px" bottom="5px">
            3CG8+5G, Alex Ekwueme Way, opposite Jabi Lake,
          </Text>
          <Text size="14px" bottom="30px">
            Jabi Abuja, Federal Capital Territory, 900108.
          </Text>
          <div className="socials">
            <CustomLink href={"/"}>
              <FontAwesomeIcon icon={faTwitter} beatFade />
            </CustomLink>
            <CustomLink href={"/"}>
              <FontAwesomeIcon icon={faInstagram} beatFade />
            </CustomLink>
            <CustomLink href={"/"}>
              <FontAwesomeIcon icon={faFacebook} beatFade />
            </CustomLink>
          </div>
        </div>
      </div>
    </IconSectionContainer>
  );
};
const Newsletter = () => {
  return (
    <NewsletterContainer>
      <SectionHeader size="25px">
        Join our <span style={{ color: "#eaca12" }}>NewsLetter</span>
      </SectionHeader>
      <div className="input">
        <TextInput placeholder="Email" />
        <Button>Submit</Button>
      </div>
    </NewsletterContainer>
  );
};
export default Footer;
