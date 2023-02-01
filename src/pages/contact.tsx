import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import PageTransition from "gatsby-plugin-page-transitions";
import Layout, { Background } from "../components/layout";
import Seo from "../components/seo";
import { colors } from "../styles/colors";

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query SiteSocialQuery {
      site {
        siteMetadata {
          social {
            email
            linkedin
            github
          }
        }
      }
    }
  `);

  return (
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
        <Flex>
          Email:{" "}
          <SocialLink
            href={`mailto:${data.site.siteMetadata.social.email}`}
            color="#ecc7c0"
            data-tip
            data-for="gmail"
            background="dark"
          >
            dhkim1014@gmail.com
          </SocialLink>
        </Flex>
        <Flex>
          On the Internet:{" "}
          <SocialLink
            href={`https://linkedin.com/in/${data.site.siteMetadata.social.linkedin}`}
            rel="noopener noreferrer"
            target="_blank"
            data-tip
            data-for="linkedin"
            background="dark"
          >
            LinkedIn
          </SocialLink>
          {"/"}
          <SocialLink
            href={`https://github.com/${data.site.siteMetadata.social.github}`}
            rel="noopener noreferrer"
            target="_blank"
            data-tip
            data-for="github"
            background="dark"
          >
            Github
          </SocialLink>
        </Flex>
      </Layout>
    </PageTransition>
  );
};

export const Head = () => <Seo title="Contact" />;

export default ContactPage;

const Flex = styled.div`
  display: flex;
  gap: 8px;
  letter-spacing: 1.5px;
  line-height: 2;
  font-weight: 300;
`;

const SocialLink = styled.a<{ background: Background }>`
  color: ${({ background }) =>
    colors[background === "dark" ? "light" : "dark"]};

  &:hover {
    font-style: italic;
    transition: all 0.5s;
  }
`;
