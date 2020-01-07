import { css } from "styled-components";
import React from "react";
import { IScreenSizes, ScreenSizes, IMediaQueries } from "./models/screen-sizes.model";

const sizes: IScreenSizes = {
  small: ScreenSizes.SMALL,
  medium: ScreenSizes.MEDIUM,
  large: ScreenSizes.LARGE,
};

type TScreenSizes = keyof typeof sizes;

export const media = Object.keys(sizes).reduce<IMediaQueries>((acc: IMediaQueries, label: TScreenSizes) => {
  (acc as any)[label] = (...args: React.CSSProperties[]) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      // @ts-ignore
      ${css(...args)}
    }
  `;
  return acc;
}, {} as IMediaQueries);
