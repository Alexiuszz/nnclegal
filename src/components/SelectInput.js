import styled from "styled-components";
import React from "react";
import { TextInputFullContainer } from "./TextInput";

const SelectInputContainer = styled(TextInputFullContainer)`
  label {
    top: -18px;
    left: 0px;
  }
  select {
    padding: 5px 10px;
    width: ${({ $width }) => $width || "100%"};
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.accents};
    outline: none;
    font-size: 18px;
    font-family: inherit;
    background-color: transparent;
  }

  @media screen and (max-width: 880px) {
    select {
      font-size: 14px;
    }
  }
`;

function SelectInput({
  className,
  label,
  options,
  value,
  handleChange,
  name,
  required,
}) {
  return (
    <SelectInputContainer className={className}>
      <select
        name={name}
        id={name}
        onChange={(e) => handleChange(e)}
        value={value}
      >
        {options.map((item, i) => (
          <option value={item} key={i}>
            {item}
          </option>
        ))}
      </select>
      <label htmlFor={name}>
        {label}
        {required && "*"}
      </label>
    </SelectInputContainer>
  );
}

export default SelectInput;
