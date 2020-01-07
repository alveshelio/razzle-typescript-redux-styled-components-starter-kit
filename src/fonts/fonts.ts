import { createGlobalStyle } from "styled-components";

import * as AvalonMedium from "./woff/Avalon-Medium.woff";
import * as AvalonMedium2 from "./woff/Avalon-Medium.woff2";
import * as AvalonDemi from "./woff/Avalon-Demi.woff";
import * as AvalonDemi2 from "./woff/Avalon-Demi.woff2";
import * as AvalonBold from "./woff/Avalon-Bold.woff";
import * as AvalonBold2 from "./woff/Avalon-Bold.woff2";
import { themeCommon } from "../theme/theme-common";

export default createGlobalStyle`
  @font-face {
   font-family: "Avalon";
   src: local("Avalon"), local("Avalon"),
   url(${AvalonMedium}) format("woff"),
   url(${AvalonMedium2}) format("woff2");
   font-weight: ${themeCommon.typography.weight.normal};
   font-style: normal;
  }

  @font-face {
   font-family: "Avalon";
   src: local("Avalon"), local("Avalon"),
   url(${AvalonDemi}) format("woff"),
   url(${AvalonDemi2}) format("woff2");
   font-weight: ${themeCommon.typography.weight.bold};
   font-style: normal;
  }

  @font-face {
   font-family: "Avalon";
   src: local("Avalon"), local("Avalon"),
   url(${AvalonBold}) format("woff"),
   url(${AvalonBold2}) format("woff2");
   font-weight: ${themeCommon.typography.weight.boldest};
   font-style: normal;
  }
`;
