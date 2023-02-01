import { Link } from "gatsby";

import Layout from "../../components/layout";
import Seo from "../../components/seo";

const WorkPage = () => (
  <Layout>
    <h1>WORK</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export const Head = () => <Seo title="Work" />;

export default WorkPage;
