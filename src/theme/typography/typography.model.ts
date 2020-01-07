import { IButtonFontSize } from "../buttons/buttons.model";

export interface ITextStyle {
  fontSize: string;
  lineHeight: number;
  fontWeight: number;
}

export interface IHeadingFontSize {
  h1: ITextStyle;
  h2: ITextStyle;
  h3: ITextStyle;
  h4: ITextStyle;
  h5: ITextStyle;
  h6: ITextStyle;
}

export interface IFontSize {
  heading: IHeadingFontSize;
  p: ITextStyle;
  body: ITextStyle;
  button: IButtonFontSize;
}

export interface IFontWeight {
  normal: number;
  bold: number;
  boldest: number;
}

export interface ITypography {
  family: string;
  size: IFontSize;
  weight: IFontWeight;
}

export interface IMessageColor {
  info: string;
  warning: string;
  success: string;
  error: string;
  alert: string;
  danger: string;
}

export interface ITypographyColor {
  message: IMessageColor;
  heading: string;
  body: string;
  description: string;
  light: string;
  lighter: string;
  white: string;
}
