import styled from "@emotion/styled";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import { colors } from "../styles/colors";

const pageLinks = [
  { text: "about", url: "/about" },
  { text: "work", url: "/work" },
  { text: "contact", url: "/contact" },
];

const IndexPage = () => (
  <Layout>
    <SectionRight>
      {pageLinks.map((link) => (
        <PageLink key={link.url} to={link.url}>
          {link.text}
        </PageLink>
      ))}
    </SectionRight>
  </Layout>
);

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />;

export default IndexPage;

const SectionRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 65%;
  height: 90vh;
  padding-top: 5vh;
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
`;
