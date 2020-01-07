import { colorPalette } from "../color-pelette";
import { IColorsTheme } from "../models/theme-colors.model";
import { darkButtonsColors } from "./dark-buttons-theme-color";
import { darkTypographyColors } from "./dark-typography-theme-colors";
import { darkElevationColors } from "./dark-theme-elevation-colors";
import { darkGradientColors } from "./dark-theme-gradient-colors";

export const darkTheme: IColorsTheme = {
  common: {
    primary: colorPalette.blue[700],
    secondary: colorPalette.blue[400],
    backgroundLight: colorPalette.blue[700],
    backgroundDark: colorPalette.black,
  },
  elevation: darkElevationColors,
  gradient: darkGradientColors,
  typography: darkTypographyColors,
  buttons: darkButtonsColors,
};
