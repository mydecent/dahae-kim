/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import styled from "@emotion/styled";
import { graphql, Link, useStaticQuery } from "gatsby";
import { colors } from "../styles/colors";
import { Background } from "./layout";

interface Props {
  background?: Background;
}

const Header = ({ background = "light" }: Props) => {
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
      <Title to="/">{data.site.siteMetadata.title}</Title>
      <Line background={background} />
      <Footer>
        <CopyrightText>© {new Date().getFullYear()}</CopyrightText>
      </Footer>
    </Navbar>
  );
};

export default Header;

const Navbar = styled.nav<{ background: Background }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  position: fixed;
  height: 100vh;
  width: 10%;
  padding-top: 60px;
  padding-bottom: 60px;
  padding-left: 30px;
  color: ${({ background }) =>
    colors[background === "dark" ? "light" : "dark"]};
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
`;

const Line = styled.div<{ background: Background }>`
  width: 1px;
  height: 100px;
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: ${({ background }) =>
    colors[background === "dark" ? "light" : "dark"]};
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 15px;
  padding-left: 20px;
  position: fixed;
  bottom: 60px;
`;

const CopyrightText = styled.div`
  font-size: 10px;
  font-weight: 500;
  text-align: center;
  letter-spacing: 5px;
  transform: rotate(-90deg);
  width: 110px;
`;
