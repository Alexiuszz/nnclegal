import React from "react";
import Image from "next/image";
import { RoomModalContainer } from "./room-modal.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faXmark } from "@fortawesome/free-solid-svg-icons";
import Slide2 from "../slider/slider2";
import { SectionHeader2, Text } from "../typography";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import StyledList from "../StyledList";
import LinkButton from "../LinkButton";

function RoomModal({ isOpen, closeModal, room }) {
  return (
    <RoomModalContainer isOpen={isOpen} onClick={closeModal}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-close" onClick={closeModal}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <div className="room-details">
          <Slide2
            list={room?.images}
            roomName={room?.roomName}
            Component={ImageSlide}
          />
          <div className="description">
            <Text width="100%" center={"center"}>
              {room?.details.description}
            </Text>
          </div>
          <div className="details">
            <Text>
              <span>
                <FontAwesomeIcon icon={faSquare} />
              </span>{" "}
              <span>
                {room?.details.size}
                ft<sup>2</sup>
              </span>
            </Text>
            <Text>
              <span>
                <FontAwesomeIcon icon={faUsers} />
              </span>{" "}
              <span>{room?.details.capacity}</span>
            </Text>
          </div>
          <div className="price">
            <Text size="20px">
              Starting from ₦{" "}
              <span>{room?.price}</span>
            </Text>
            <LinkButton href="/reservations">Book now</LinkButton>
          </div>
          <div className="amenities">
            <SectionHeader2 center="center" size="20px" bottom="15px">
              Amenities
            </SectionHeader2>
            <ul className="amenities-list">
              {room?.details.amenites.map((item, i) => (
                <StyledList key={i}>
                  <Text>{item}</Text>
                </StyledList>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </RoomModalContainer>
  );
}

function ImageSlide({ item, onClick }) {
  return (
    <div className="img-container" onClick={onClick}>
      <Image
        height={600}
        width={900}
        src={item}
        alt={"room"}
        loading="lazy"
      />
    </div>
  );
}

export default RoomModal;
