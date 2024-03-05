import React from "react";
import { StyledRightArrow, StyledLeftArrow } from "./arrowBtns";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

export function LeftArrow() {
  const {
    isFirstItemVisible,
    scrollPrev,
    items,
    scrollToItem,
    getItemElementById,
  } = React.useContext(VisibilityContext);

  return (
    <StyledLeftArrow
      disabled={false}
      onClick={() => {
        if (isFirstItemVisible) {
          scrollToItem(
            getItemElementById(items.toArr().slice(-1)?.[0]?.[0])
          );
        } else {
          scrollPrev();
        }
      }}
    >
      Prev
    </StyledLeftArrow>
  );
}

export function RightArrow() {
  const {
    isLastItemVisible,
    scrollNext,
    items,
    scrollToItem,
    getItemElementById,
  } = React.useContext(VisibilityContext);

  return (
    <StyledRightArrow
      disabled={false}
      onClick={() => {
        if (isLastItemVisible) {
          scrollToItem(getItemElementById(items.toArr()?.[0]?.[0]));
        } else {
          scrollNext();
        }
      }}
    >
      Next
    </StyledRightArrow>
  );
}
