export interface IButtonFontSize {
  default: string;
  small: string;
}

export interface IButtonStateColors {
  text: string;
  background: string;
  border: string;
}

export interface IButtonsType {
  default: IButtonTypeState;
  link: IButtonTypeState;
}

export interface IButtonTypeState {
  default: IButtonStateColors;
  disabled: IButtonStateColors;
  hover: IButtonStateColors;
}
