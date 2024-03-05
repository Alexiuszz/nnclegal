import styled from "styled-components";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "300",
});

export const TextInput = styled.input.attrs((props) => ({
  className: montserrat.className,
}))`
  padding: 5px 10px;
  width: ${({ $width }) => $width || "100%"};
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.accents};
  font-size: 18px;
  background-color: transparent;
  @media screen and (max-width: 880px) {
    font-size: 14px;
  }
`;

export const TextAreaInput = styled.textarea.attrs((props) => ({
  className: montserrat.className,
}))`
  padding: 10px 10px;
  width: ${({ $width }) => $width || "100%"};
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.accents};
  outline: none;
  font-size: 18px;
  background-color: transparent;
  @media screen and (max-width: 880px) {
    font-size: 14px;
  }
`;

export const TextInputFullContainer = styled.div.attrs((props) => ({
  className: montserrat.className,
}))`
  position: relative;
  label {
    position: absolute;
    top: ${({ $value }) => ($value !== "" ? "-12px" : "5px")};
    left: ${({ $value }) => ($value !== "" ? "0" : "10px")};
    transition: all 0.3s;
    pointer-events: none;
  }
  input:focus-visible + label,
  textarea:focus-visible + label {
    top: -12px;
    left: 0px;
    transform: scale(0.7);
    color: ${({ theme }) => theme.accents};
  }
`;

function TextInputFull({
  className,
  label,
  placeHolder,
  value,
  handleChange,
  name,
  type = "text",
  required,
}) {
  return (
    <TextInputFullContainer $value={value} className={className}>
      {type !== "textarea" ? (
        <TextInput
          onChange={(e) => handleChange(e)}
          id={name}
          name={name}
          required={required}
          placeHolder={placeHolder}
          type={type}
          value={value}
        />
      ) : (
        <TextAreaInput
          onChange={handleChange}
          id={name}
          name={name}
          required={required}
          placeHolder={placeHolder}
          value={value}
        />
      )}{" "}
      <label htmlFor={name}>
        {label}
        {required && "*"}
      </label>
    </TextInputFullContainer>
  );
}

export default TextInputFull;
