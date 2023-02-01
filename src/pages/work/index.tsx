import PageTransition from "gatsby-plugin-page-transitions";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const WorkPage = () => (
  <PageTransition
    defaultStyle={{
      transition: "top 500ms cubic-bezier(0.47, 0, 0.75, 0.72)",
      top: "100%",
      position: "absolute",
      width: "100%",
    }}
    transitionStyles={{
      entering: { top: "0%" },
      entered: { top: "0%" },
      exiting: { top: "100%" },
    }}
  >
    <Layout background="dark">
      <h1>WORK</h1>
    </Layout>
  </PageTransition>
);

export const Head = () => <Seo title="Work" />;

export default WorkPage;
