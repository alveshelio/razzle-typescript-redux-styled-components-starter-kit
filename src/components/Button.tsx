import React from "react";

interface ButtonProps {
  children: React.ReactElement;
}

const Button: React.FC = ({ children }) => <button>{children}</button>;

export default Button;
