import { IThemeCommon, ThemeMode } from "./models/theme-common.model";
import { typography } from "./typography/typography-common";
import { lightTheme } from "./light/light-theme-colors";
import { darkTheme } from "./dark/dark-theme-colors";
import { media } from "./screen-sizes";

export const themeCommon: IThemeCommon = {
  colors: {
    [ThemeMode.LIGHT]: {
      ...lightTheme,
    },
    [ThemeMode.DARK]: {
      ...darkTheme,
    },
  },
  typography,
  media,
};
