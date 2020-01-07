import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
  cursor: pointer;

  &:hover {
    color: gray;
    border: 2px solid gray;
  }
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactElement | string;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => <StyledButton {...rest}>{children}</StyledButton>;

export default Button;
