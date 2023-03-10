/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { colors } from "../styles/colors";
import Header from "./header";

export type Background = "light" | "dark";

interface Props {
  children?: ReactNode;
  background?: Background;
  title?: ReactNode;
}

const Layout = ({ background = "light", title, children }: Props) => {
  return (
    <>
      <Global
        styles={css`
          @font-face {
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 400;
          }

          @font-face {
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 500;
          }

          @font-face {
            font-family: "Unbounded";
            font-style: normal;
            font-weight: 500;
          }

          * {
            box-sizing: border-box;
          }

          body {
            min-height: 100%;
            font-family: Montserrat, sans-serif;
            font-size: 14px;
            background-color: ${colors[background]};
            color: ${colors[background === "dark" ? "light" : "dark"]};
          }
        `}
      />
      <Header background={background} title={title} />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;

const Main = styled.div`
  position: relative;
  max-width: 90%;
  width: 80%;
  height: 100%;
  margin-right: auto;
  margin-left: 10%;
  padding-right: 5%;
  padding-left: 5%;

  @media (max-width: 767px) {
    margin: 0;
    width: 100%;
  }
`;
