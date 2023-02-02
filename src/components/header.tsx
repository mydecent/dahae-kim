/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import styled from "@emotion/styled";
import { graphql, Link, useStaticQuery } from "gatsby";
import { ReactNode } from "react";
import { colors } from "../styles/colors";
import { Background } from "./layout";

interface Props {
  background?: Background;
  title?: ReactNode;
}

const Header = ({ background = "light", title }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Navbar background={background}>
      <Flex>
        <Title to="/">{title ?? data.site.siteMetadata.title}</Title>
        <Line background={background} />
      </Flex>
      <Footer>
        <CopyrightText>© {new Date().getFullYear()}</CopyrightText>
      </Footer>
    </Navbar>
  );
};

export default Header;

const Navbar = styled.nav<{ background: Background }>`
  position: fixed;
  height: 100vh;
  width: 10%;
  padding-top: 60px;
  padding-bottom: 60px;
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ background }) =>
    colors[background === "dark" ? "light" : "dark"]};

  @media (max-width: 767px) {
    width: 100%;
    height: auto;
    position: static;
    padding-top: 30px;
    padding-bottom: 0px;
    padding-left: 0px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;

  @media (max-width: 767px) {
    flex-direction: row;
    gap: 0;
  }
`;

const Title = styled(Link)`
  font-size: 10px;
  font-weight: 500;
  text-align: center;
  letter-spacing: 5px;
  text-decoration: none;
  text-transform: uppercase;
  display: block;
  padding-right: 50px;
  padding-left: 20px;
  transform: rotate(-90deg);
  color: inherit;
  width: max-content;

  &:hover {
    text-decoration: line-through;
  }

  @media (max-width: 767px) {
    transform: rotate(0);
    padding-right: 30px;
  }
`;

const Line = styled.div<{ background: Background }>`
  width: 1px;
  height: 100px;
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: ${({ background }) =>
    colors[background === "dark" ? "light" : "dark"]};

  @media (max-width: 767px) {
    width: 100px;
    height: 2px;
    margin: 0;
  }

  @media (max-width: 479px) {
    width: 40px;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 15px;
  padding-left: 20px;
  position: fixed;
  bottom: 60px;

  @media (max-width: 767px) {
    position: static;
  }
`;

const CopyrightText = styled.div`
  font-size: 10px;
  font-weight: 500;
  text-align: center;
  letter-spacing: 5px;
  transform: rotate(-90deg);
  width: 110px;

  @media (max-width: 767px) {
    transform: rotate(0);
  }
`;
