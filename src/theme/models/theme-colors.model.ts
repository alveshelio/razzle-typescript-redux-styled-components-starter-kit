import { ITypographyColor } from "../typography/typography.model";
import { IButtonsType } from "../buttons/buttons.model";
import { IElevation } from "./elevation-colors.model";
import { IGradientColors } from "./gradient-colors.model";

interface IColorsCommon {
  primary: string;
  secondary: string;
  backgroundLight: string;
  backgroundDark: string;
}

export interface IColorsTheme {
  common: IColorsCommon;
  elevation: IElevation;
  gradient: IGradientColors;
  typography: ITypographyColor;
  buttons: IButtonsType;
}
