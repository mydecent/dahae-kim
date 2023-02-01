import { Link } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const ContactPage = () => (
  <Layout>
    <h1>CONTACT</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export const Head = () => <Seo title="Contact" />;

export default ContactPage;
