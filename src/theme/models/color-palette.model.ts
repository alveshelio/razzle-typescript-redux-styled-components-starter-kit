export interface IRedPalette {
  200: string;
  600: string;
  700: string;
  800: string;
}

export interface IYellowPalette {
  200: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export interface IGreenPalette {
  100: string;
  200: string;
  500: string;
  700: string;
  800: string;
}

export interface IGreyPalette {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export interface IBluePalette {
  25: string;
  50: string;
  100: string;
  200: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export interface IColorPalette {
  blue: IBluePalette;
  red: IRedPalette;
  yellow: IYellowPalette;
  green: IGreenPalette;
  grey: IGreyPalette;
  white: string;
  black: string;
}
