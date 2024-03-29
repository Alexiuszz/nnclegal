import React from "react";
import { StyledRightArrow, StyledLeftArrow } from "./arrowBtns";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { Text } from "../typography";

export function LeftArrow() {
  const {
    isFirstItemVisible,
    scrollPrev,
    visibleElements,
    initComplete,
  } = React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !initComplete || (initComplete && isFirstItemVisible)
  );
  React.useEffect(() => {
    // NOTE: detect if whole component visible
    if (visibleElements.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleElements]);

  return (
    <StyledLeftArrow disabled={disabled} onClick={() => scrollPrev()}>
      <Text>Prev</Text>
    </StyledLeftArrow>
  );
}

export function RightArrow() {
  const { isLastItemVisible, scrollNext, visibleElements } =
    React.useContext(VisibilityContext);

  // console.log({ isLastItemVisible });
  const [disabled, setDisabled] = React.useState(
    !visibleElements.length && isLastItemVisible
  );
  React.useEffect(() => {
    if (visibleElements.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleElements]);

  return (
    <StyledRightArrow
      disabled={disabled}
      onClick={() => scrollNext()}
    >
      <Text>Next</Text>
    </StyledRightArrow>
  );
}
