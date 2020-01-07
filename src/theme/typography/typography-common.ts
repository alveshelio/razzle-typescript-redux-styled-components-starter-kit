import { ITypography } from "./typography.model";

export const typography: ITypography = {
  family: "'Avalon', sans-serif",
  weight: {
    normal: 400,
    bold: 700,
    boldest: 900,
  },
  size: {
    p: {
      fontWeight: 400,
      fontSize: "10px",
      lineHeight: 1.3,
    },
    heading: {
      h1: {
        fontSize: "38px",
        lineHeight: 1.05,
        fontWeight: 700,
      },
      h2: {
        fontSize: "30px",
        lineHeight: 1.07,
        fontWeight: 700,
      },
      h3: {
        fontSize: "22px",
        lineHeight: 1.27,
        fontWeight: 700,
      },
      h4: {
        fontSize: "16px",
        lineHeight: 1.25,
        fontWeight: 700,
      },
      h5: {
        fontSize: "14px",
        lineHeight: 1.29,
        fontWeight: 700,
      },
      h6: {
        fontSize: "12px",
        lineHeight: 1.33,
        fontWeight: 700,
      },
    },
    body: {
      fontSize: "17px",
      fontWeight: 400,
      lineHeight: 1.2,
    },
    button: {
      default: "15px",
      small: "13px",
    },
  },
};
