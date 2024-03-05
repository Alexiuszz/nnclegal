import React, {
  useEffect,
  useReducer,
  useState,
  useRef,
} from "react";
import ls from "localstorage-slim";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import {
  GuestsNumberContainer,
  RoomSearchContainer,
} from "./room-search.styles";
import { Header, Text } from "../typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faArrowRight,
  faMinusCircle,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import LinkButton from "../LinkButton";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

export const getData = (key) => {
  if (typeof window !== "undefined") {
    const data = ls.get(key);
    if (data) return data;
    else return null;
  }
};

function RoomSearch({
  openCalender,
  setOpenCalender,
  openGuestsNumber,
  setOpenGuestsNumber,
}) {
  const guestsData = useRef(getData("Reservation-guests"));
  const datesData = useRef(getData("Reservation-dates"));

  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [guests, setGuests] = useReducer(
    (guests, newData) => ({ ...guests, ...newData }),
    {
      rooms: 1,
      adults: 1,
      children: 0,
    }
  );
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  useEffect(() => {
    setDates([
      {
        startDate: datesData.current
          ? new Date(datesData.current[0].startDate)
          : new Date(),
        endDate: datesData.current
          ? new Date(datesData.current[0].endDate)
          : new Date(),
        key: "selection",
      },
    ]);
    setGuests(guestsData.current);
  }, []);

  const controlNavbar = () => {
    const container = document.querySelector(".main-layout");
    if (container) {
      const winScroll = container.scrollTop;

      if (winScroll > lastScrollY) {
        // if scroll down hide the navbar
        setHasScrolled(false);
      } else {
        // if scroll up show the navbar

        setHasScrolled(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(winScroll);
    }
  };

  useEffect(() => {
    if (dates) ls.set("Reservation-dates", dates, { ttl: 3600 * 2 });
  }, [dates]);

  useEffect(() => {
    if (guests)
      ls.set("Reservation-guests", guests, { ttl: 3600 * 2 });
  }, [guests]);

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
    <RoomSearchContainer
      $scrollUp={hasScrolled}
      $isTop={lastScrollY < 200}
      $openCalender={openCalender}
      $openGuestsNumber={openGuestsNumber}
    >
      <div className="date-range">
        <div
          className="dates-picked"
          onClick={(e) => {
            e.stopPropagation();
            setOpenCalender();
            openGuestsNumber && setOpenGuestsNumber();
          }}
        >
          <Header size="55px">{dates[0].startDate.getDate()}</Header>
          <Text>
            <span style={{ fontWeight: 600 }}>
              {months[dates[0].startDate.getMonth()]}
            </span>
            <span>{dates[0].startDate.getFullYear()}</span>
          </Text>
        </div>
        <div className="right-pointer">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
        <div
          className="dates-picked"
          onClick={(e) => {
            e.stopPropagation();
            setOpenCalender();
            openGuestsNumber && setOpenGuestsNumber();
          }}
        >
          <Header size="55px">{dates[0].endDate.getDate()}</Header>
          <Text>
            <span style={{ fontWeight: 600 }}>
              {months[dates[0].endDate.getMonth()]}
            </span>
            <span>{dates[0].endDate.getFullYear()}</span>
          </Text>
        </div>
        <div
          className="calender"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDates([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={dates}
            minDate={new Date()}
          />
        </div>
      </div>
      <div className="guests">
        <div className="guest-number">
          <Header>{guests.rooms}</Header>
          <Text>Room{guests.rooms !== 1 && <span>s</span>}</Text>
        </div>
        <div className="guest-number">
          <Header>{guests.adults}</Header>
          <Text>Adult{guests.adults !== 1 && <span>s</span>}</Text>
        </div>
        {guests.children > 0 && (
          <div className="guest-number">
            <Header>{guests.children}</Header>
            <Text>
              Child{guests.children !== 1 && <span>ren</span>}
            </Text>
          </div>
        )}
        <div
          className="menu-icon"
          onClick={(e) => {
            e.stopPropagation();
            setOpenGuestsNumber();
            openCalender && setOpenCalender();
          }}
        >
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
        <div
          className="calender"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <GuestsNumber
            guests={guests}
            setGuests={(newData) => setGuests(newData)}
          />
        </div>
      </div>
      <LinkButton href={"reservations"}>Book Now</LinkButton>
    </RoomSearchContainer>
  );
}

function GuestsNumber({ guests, setGuests }) {
  return (
    <GuestsNumberContainer>
      <div>
        <Text>Rooms</Text>
        <div>
          <FontAwesomeIcon
            color={guests.rooms > 1 ? "#091231" : "#eef2ff"}
            onClick={() =>
              setGuests({
                rooms: guests.rooms > 1 ? guests.rooms - 1 : 1,
              })
            }
            icon={faMinusCircle}
          />{" "}
          <Text>{guests.rooms}</Text>
          <FontAwesomeIcon
            onClick={() =>
              setGuests({
                rooms:
                  guests.rooms < 8 ? guests.rooms + 1 : guests.rooms,
              })
            }
            color={guests.rooms < 8 ? "#091231" : "#eef2ff"}
            icon={faPlusCircle}
          />
        </div>
      </div>
      <div>
        <Text>Adults</Text>
        <div>
          <FontAwesomeIcon
            color={guests.adults > 1 ? "#091231" : "#eef2ff"}
            onClick={() =>
              setGuests({
                adults: guests.adults > 1 ? guests.adults - 1 : 1,
              })
            }
            icon={faMinusCircle}
          />{" "}
          <Text>{guests.adults}</Text>
          <FontAwesomeIcon
            onClick={() =>
              setGuests({
                adults:
                  guests.adults < 4
                    ? guests.adults + 1
                    : guests.adults,
              })
            }
            color={guests.adults < 4 ? "#091231" : "#eef2ff"}
            icon={faPlusCircle}
          />
        </div>
      </div>

      <div>
        <Text>Children</Text>
        <div>
          <FontAwesomeIcon
            color={guests.children > 1 ? "#091231" : "#eef2ff"}
            onClick={() =>
              setGuests({
                children:
                  guests.children > 0 ? guests.children - 1 : 0,
              })
            }
            icon={faMinusCircle}
          />{" "}
          <Text>{guests.children}</Text>
          <FontAwesomeIcon
            onClick={() =>
              setGuests({
                children:
                  guests.children < 2
                    ? guests.children + 1
                    : guests.children,
              })
            }
            color={guests.children < 2 ? "#091231" : "#eef2ff"}
            icon={faPlusCircle}
          />
        </div>
      </div>
    </GuestsNumberContainer>
  );
}

export default RoomSearch;
