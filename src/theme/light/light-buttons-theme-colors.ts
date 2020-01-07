import { colorPalette } from "../color-pelette";
import { IButtonsType } from "../buttons/buttons.model";

export const lightButtonsColors: IButtonsType = {
  default: {
    default: {
      background: colorPalette.blue[700],
      text: colorPalette.white,
      border: colorPalette.blue[700],
    },
    disabled: {
      background: colorPalette.grey[300],
      text: colorPalette.grey[500],
      border: colorPalette.grey[300],
    },
    hover: {
      background: colorPalette.grey[300],
      text: colorPalette.grey[500],
      border: colorPalette.grey[300],
    },
  },
  link: {
    default: {
      background: colorPalette.white,
      text: colorPalette.white,
      border: colorPalette.blue[700],
    },
    disabled: {
      background: colorPalette.grey[300],
      text: colorPalette.grey[500],
      border: colorPalette.grey[300],
    },
    hover: {
      background: colorPalette.grey[300],
      text: colorPalette.grey[500],
      border: colorPalette.grey[300],
    },
  },
};
