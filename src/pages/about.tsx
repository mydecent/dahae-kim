import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage = () => (
  <Layout>
    <h1>ABOUT</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export const Head = () => <Seo title="About" />;

export default AboutPage;
