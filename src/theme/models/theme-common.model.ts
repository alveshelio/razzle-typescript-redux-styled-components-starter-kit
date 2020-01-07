import { ITypography } from "../typography/typography.model";
import { IColorsTheme } from "./theme-colors.model";
import { IMediaQueries } from "./screen-sizes.model";

export enum ThemeMode {
  LIGHT = "light",
  DARK = "dark",
}

interface IColors {
  light: IColorsTheme;
  dark: IColorsTheme;
}

export interface IThemeCommon {
  colors: IColors;
  typography: ITypography;
  media: IMediaQueries;
}
