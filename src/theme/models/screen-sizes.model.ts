export enum ScreenSizes {
  SMALL = 300,
  MEDIUM = 700,
  LARGE = 900,
}
export interface IScreenSizes {
  small: ScreenSizes;
  medium: ScreenSizes;
  large: ScreenSizes;
  [key: string]: ScreenSizes;
}

export interface IMediaQueries {
  small: any;
  medium: any;
  large: any;
  [key: string]: any;
}
