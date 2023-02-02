import styled from "@emotion/styled";
import { Link } from "gatsby";

import PageTransition from "gatsby-plugin-page-transitions";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { colors } from "../styles/colors";

const pageLinks = [
  { text: "about", url: "/about" },
  { text: "work", url: "/work" },
  { text: "contact", url: "/contact" },
];

const IndexPage = () => (
  <PageTransition
    defaultStyle={{
      transition: "left 500ms cubic-bezier(0.47, 0, 0.75, 0.72)",
      left: "100%",
      position: "absolute",
      width: "100%",
      height: "100%",
    }}
    transitionStyles={{
      entering: { left: "0%" },
      entered: { left: "0%" },
      exiting: { left: "100%" },
    }}
  >
    <Layout>
      <Wrapper>
        {pageLinks.map((link) => (
          <PageLink key={link.url} to={link.url}>
            {link.text}
          </PageLink>
        ))}
      </Wrapper>
    </Layout>
  </PageTransition>
);

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />;

export default IndexPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const PageLink = styled(Link)`
  color: ${colors.dark};
  font-family: Unbounded, sans-serif;
  font-size: 12vw;
  line-height: 0.95em;
  font-weight: 300;
  text-align: left;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    transform: translateX(5%);
    font-style: italic;
    transition: all 0.5s;
  }

  @media (max-width: 767px) {
    line-height: 1.5em;
  }
`;
