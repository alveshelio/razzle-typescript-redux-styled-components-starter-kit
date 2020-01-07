import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "../../styles/global";
import GlobalFonts from "../../fonts/fonts";
import HeaderContent from "../../components/Header";
import FooterContent from "../../components/Footer";
import { themeCommon } from "../../theme/theme-common";

const Layout = styled.div`
  display: grid;
  grid-template-rows: 60px 1fr 60px;
  justify-content: center;
`;

const Header = styled.header`
  background: ${themeCommon.colors.light.common.backgroundLight};
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 10;
`;

const Main = styled.main`
  margin: 20px 0;
  display: flex;
  justify-content: center;
`;

const Footer = styled.footer`
  display: grid;
  align-items: center;
  justify-content: center;
`;

interface ILayoutProps {
  title: string;
}
export const CommonLayout: React.FC<ILayoutProps> = ({ children, title }) => {
  return (
    <ThemeProvider theme={{ mode: "light" }}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <GlobalStyles />
      <GlobalFonts />
      <Layout>
        <Header>
          <HeaderContent />
        </Header>
        <Main>{children}</Main>
        <Footer>
          <FooterContent />
        </Footer>
      </Layout>
    </ThemeProvider>
  );
};
