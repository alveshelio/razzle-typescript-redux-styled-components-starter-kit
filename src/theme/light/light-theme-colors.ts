import { colorPalette } from "../color-pelette";
import { IColorsTheme } from "../models/theme-colors.model";
import { lightButtonsColors } from "./light-buttons-theme-colors";
import { lightTypographyColors } from "./light-typography-theme-colors";
import { lightElevationColors } from "./light-theme-elevation-colors";
import { lightGradientColors } from "./light-theme-gradient-colors";

export const lightTheme: IColorsTheme = {
  common: {
    primary: colorPalette.blue[700],
    secondary: colorPalette.blue[400],
    backgroundLight: colorPalette.white,
    backgroundDark: colorPalette.black,
  },
  elevation: lightElevationColors,
  gradient: lightGradientColors,
  typography: lightTypographyColors,
  buttons: lightButtonsColors,
};
