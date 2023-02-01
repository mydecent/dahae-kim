import { Link } from "gatsby";
import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

const samplePageLinks = [
  { text: "about", url: "/about" },
  { text: "work", url: "/work" },
  { text: "contact", url: "/contact" },
];

const IndexPage = () => (
  <Layout>
    {samplePageLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <Link to={link.url}>{link.text}</Link>
        {i !== samplePageLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
);

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />;

export default IndexPage;
