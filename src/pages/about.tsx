import styled from "@emotion/styled";
import PageTransition from "gatsby-plugin-page-transitions";

import Layout, { Background } from "../components/layout";
import Seo from "../components/seo";
import { colors } from "../styles/colors";

const AboutPage = () => (
  <PageTransition
    defaultStyle={{
      transition: "top 500ms cubic-bezier(0.47, 0, 0.75, 0.72)",
      top: "100%",
      position: "absolute",
      width: "100%",
      height: "100%",
    }}
    transitionStyles={{
      entering: { top: "0%" },
      entered: { top: "0%" },
      exiting: { top: "100%" },
    }}
  >
    <Layout background="dark">
      <Wrapper>
        <div>
          <Txt>Former Fashion Buyer, Now Software Engineer</Txt>
          <Txt>
            Currently working as a Frontend Engineer at{" "}
            <Link
              href="https://toss.im/"
              rel="noopener noreferrer"
              target="_blank"
              data-tip
              data-for="resume"
              background="dark"
            >
              Toss
            </Link>
          </Txt>
          <Txt>
            You can check more details{" "}
            <Link
              href={`https://docs.google.com/document/d/1IfJhLs5G67eJf0nh8JePffLAungSJXtZHdZmcM88B-4/edit?usp=sharing`}
              rel="noopener noreferrer"
              target="_blank"
              data-tip
              data-for="resume"
              background="dark"
            >
              here
            </Link>
          </Txt>
        </div>
        <div style={{ marginTop: 30 }}>
          <Txt>
            전직 신세계/분더샵 패션바이어, 소프트웨어 엔지니어로 커리어를
            전향하여
          </Txt>
          <Txt>
            현재{" "}
            <Link
              href="https://toss.im/"
              rel="noopener noreferrer"
              target="_blank"
              data-tip
              data-for="resume"
              background="dark"
            >
              토스
            </Link>
            에서 프론트엔드 개발자로 근무중입니다
          </Txt>
          <Txt>
            더 자세한 이력서는{" "}
            <Link
              href={`https://docs.google.com/document/d/1IfJhLs5G67eJf0nh8JePffLAungSJXtZHdZmcM88B-4/edit?usp=sharing`}
              rel="noopener noreferrer"
              target="_blank"
              data-tip
              data-for="resume"
              background="dark"
            >
              여기
            </Link>
            서 확인 가능합니다
          </Txt>
        </div>
      </Wrapper>
    </Layout>
  </PageTransition>
);

export const Head = () => <Seo title="About" />;

export default AboutPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const Txt = styled.div`
  letter-spacing: 1.5px;
  line-height: 2;
  font-weight: 300;
`;

const Link = styled.a<{ background: Background }>`
  display: inline;
  color: ${({ background }) =>
    colors[background === "dark" ? "light" : "dark"]};

  &:hover {
    font-style: italic;
    transition: all 0.5s;
  }
`;
