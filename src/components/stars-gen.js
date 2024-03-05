import styled from "styled-components";

const StarsGenContainer = styled.div`
  display: flex;
`;

const Star = styled.div`
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  background-color: ${({ theme, $gold }) =>
    $gold ? theme.accents : "#cdcdcd"};
  &:not(:last-of-type) {
    margin-right: ${(props) => props.$size * (1 / 10)}px;
  }
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
`;

function StarsGen({ score, size }) {
  return (
    <StarsGenContainer>
      {Array.from({ length: score }, (_, index) => (
        <Star key={index} $size={size} $gold={true} />
      ))}
      {Array.from({ length: 5 - score }, (_, index) => (
        <Star key={index} $size={size} />
      ))}
    </StarsGenContainer>
  );
}

export default StarsGen;
