import styled from "@emotion/styled";

import Layout, { Background } from "../components/layout";
import Seo from "../components/seo";
import { colors } from "../styles/colors";

const AboutPage = () => (
  <Layout background="dark">
    <div>
      <Flex>Former Fashion Buyer, Now Software Engineer</Flex>
      <Flex>
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
      </Flex>
      <Flex>
        You can check more details
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
      </Flex>
    </div>
    <div style={{ marginTop: 30 }}>
      <Flex>
        전직 신세계/분더샵 패션바이어, 소프트웨어 엔지니어로 커리어를 전향하여
      </Flex>
      <Flex>
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
      </Flex>
      <Flex>
        더 자세한 이력서는
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
      </Flex>
    </div>
  </Layout>
);

export const Head = () => <Seo title="About" />;

export default AboutPage;

const Flex = styled.div`
  display: flex;
  gap: 8px;
  letter-spacing: 1.5px;
  line-height: 2;
  font-weight: 300;
`;

const Link = styled.a<{ background: Background }>`
  color: ${({ background }) =>
    colors[background === "dark" ? "light" : "dark"]};

  &:hover {
    font-style: italic;
    transition: all 0.5s;
  }
`;
