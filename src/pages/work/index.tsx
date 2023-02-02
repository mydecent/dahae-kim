import styled from "@emotion/styled";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import PageTransition from "gatsby-plugin-page-transitions";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import milleporte from "../../images/milleporte.gif";
import { colors } from "../../styles/colors";

const WorkPage = () => (
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
        <Content>
          <LinkTitle
            to="https://tossplace.com/detail"
            rel="noopener noreferrer"
            target="_blank"
            data-tip
            data-for="tridge"
          >
            Toss POS
          </LinkTitle>
          <Period>2022.06 ~ Present</Period>
          <Description>
            {`현재는 토스에서 새롭게 진출하는 오프라인 결제 시장에 편리한 운영 경험을 제공하는 POS 소프트웨어를 개발하고 있어요.
            Electron, React 등 웹기술을 이용하여 POS를 개발 중이며, 올 상반기에 정식 런칭 예정이에요.\n
            Currently developing POS system for better experience in the offline stores, with web technologies such as Electron, React etc.
            `}
          </Description>
          <div style={{ marginTop: "2vh" }}>
            <StaticImage src="../../images/toss-pos.png" alt="toss-pos" />
          </div>
        </Content>
        <Content>
          <LinkTitle
            to="https://www.tridge.com"
            rel="noopener noreferrer"
            target="_blank"
            data-tip
            data-for="tridge"
          >
            Tridge
          </LinkTitle>
          <Period>2021.02 ~ 2022.05</Period>
          <Description>
            {`글로벌 농·축·수산물 무역 거래 플랫폼을 운영하는 트릿지의 회사 웹사이트 및 스태프용 백오피스 시스템의 UI/UX 개선하는 작업을 했어요.
              상품의 생산부터 배송까지 거래의 전 단계를 책임지는 회사의 메인 비즈니스인 '풀필먼트 솔루션'을 담당하여 웹사이트 및 어드민 사이트를 개발하였고,
              글로벌 스태프들이 사용할 하이브리드 모바일 앱 개발 및 사내 ERP 시스템을 위한 기반을 구축했어요.\n
              A website & admin system for global trading platform.
              In charge of fulfillment solution part, which is the main business model of the company, in both website and admin system.
              Built hybrid mobile app of admin system and MVP of ERP system.
            `}
          </Description>
          <ImageGrid>
            <StaticImage src="../../images/tridge-1.png" alt="tridge" />
            <StaticImage src="../../images/tridge-2.png" alt="tridge" />
          </ImageGrid>
        </Content>
        <Content>
          <Title>Chanel LeBlanc 2021</Title>
          <Period>2020.10 ~ 2020.12</Period>
          <Description>
            {`Chanel Japan에서 진행한 온라인 라이브 스트리밍 이벤트를 위한 마이크로 사이트를 제작했어요. 
            풀스택으로 클라이언트 및 서버 모두 개발하였으며, 예약현황 및 타임라인에 따른 다이내믹한 자동 화면전환, 웹소켓을 통한 라이브 스트리밍 중 실시간 채팅, 각종 그래프 및 CSV export 기능을 포함한 어드민 대시보드를 구현했어요.
            (이벤트 진행 후 웹사이트는 종료되어, 작업한 내용의 일부는 아래 이미지로 확인 가능해요)\n
            A microsite for live streaming event of Chanel LeBlanc product lines.
            Worked as full-stack, implemented dynamic page transitions depending on the reservation status and the timelines.
            Supported live chat during live streaming with WebSocket and built admin dashboard with charts & CSV export.
            `}
          </Description>
          <div style={{ marginTop: "2vh" }}>
            <StaticImage src="../../images/chanel-1.png" alt="chanel-leblanc" />
          </div>
          <ImageGrid>
            <StaticImage src="../../images/chanel-2.png" alt="chanel-leblanc" />
            <StaticImage src="../../images/chanel-3.png" alt="chanel-leblanc" />
            <StaticImage src="../../images/chanel-4.png" alt="chanel-leblanc" />
            <StaticImage src="../../images/chanel-6.png" alt="chanel-leblanc" />
          </ImageGrid>
          <div style={{ marginTop: "2vh" }}>
            <StaticImage src="../../images/chanel-5.png" alt="chanel-leblanc" />
          </div>
        </Content>
        <Content>
          <LinkTitle
            to="https://www.duolac.com"
            rel="noopener noreferrer"
            target="_blank"
            data-tip
            data-for="duolac"
          >
            Duolac
          </LinkTitle>
          <Period>2021.04 ~ 2021.06</Period>
          <Description>
            {`국내 대표 프로바이오틱 브랜드 듀오락의 글로벌 웹사이트를 구축했어요. 
            Canvas API 등을 사용한 애니메이션을 통해 다이내믹한 UI를 구현하였으며 반응형, 크로스 브라우징, CMS 기능 커스터마이징 등을 서포트했어요.\n
            A brand website of Duolac, the most recognized probiotic brand in Korea, for the global market.
            Implemented dynamic animated UI using Canvas API and other anmation libraries. 
            Supported responsive design & cross-browsing, integrated CMS.`}
          </Description>
          <ImageGrid>
            <StaticImage src="../../images/duolac-1.png" alt="duolac" />
            <StaticImage src="../../images/duolac-2.png" alt="duolac" />
          </ImageGrid>
        </Content>
        <Content>
          <LinkTitle
            to="https://www.milleporte.com/"
            rel="noopener noreferrer"
            target="_blank"
            data-tip
            data-for="Milleporte"
          >
            Milleporte
          </LinkTitle>
          <Period>2019.12 ~ 2020.01</Period>
          <Description>
            {`일본에 본사를 둔 패션 및 라이프스타일 중심의 이커머스 사이트 Milleporte의 카트 및 결제 플로우를 리뉴얼하는 작업을 했어요.
            인터랙티브한 쇼핑카트 및 one-page 체크아웃 페이지를 통해 복잡한 결제 경험을 보다 편하게 개선했어요.
            크레딧카드 BlueGate 인증 및 PayPal을 통한 결제 플로우를 구현했어요.
            (현재는 웹사이트 전체가 다시 리뉴얼되어, 기존에 작업했던 내용은 아래 이미지로 확인 가능해요)\n
            An e-commerce website for fashion & lifestyle based in Japan.
            Improved cart & checkout experience by rebuilding static pages to be interactive and replacing the multi-pages checkout process with a single page checkout.
            Handled the payment process with credit card BlueGate authentication & PayPal.`}
          </Description>
          <div style={{ marginTop: "2vh" }}>
            <Gif src={milleporte} alt="milleporte" />
          </div>
        </Content>
        <Content>
          <LinkTitle
            to="https://yujinrobot.com"
            rel="noopener noreferrer"
            target="_blank"
            data-tip
            data-for="duolac"
          >
            Yujin Robot
          </LinkTitle>
          <Period>2019.09 ~ 2019.10</Period>
          <Description>
            {`국내 서비스 로봇 대표 기업 유진로봇의 홈페이지를 리뉴얼 했어요.
            반응형, 크로스 브라우징을 고려하여 작업했으며, 다국어 지원이 가능한 CMS 커스터마이징 및 Google Analytics를 적용했어요.\n
            A corporate website of Yujin Robot, Korean leading company in the Robot industry.
            Delivered responsive, cross-browser compatible and accessibility compliant website.
            Supported multilingual, integrated CMS & Google Analytics.`}
          </Description>
          <ImageGrid>
            <StaticImage
              src="../../images/yujin-robot-1.png"
              alt="yujin-robot"
            />
            <StaticImage
              src="../../images/yujin-robot-2.png"
              alt="yujin-robot"
            />
          </ImageGrid>
        </Content>
      </Wrapper>
    </Layout>
  </PageTransition>
);

export const Head = () => <Seo title="Work" />;

export default WorkPage;

const Wrapper = styled.div`
  padding: 10vh 0;
`;

const Content = styled.div`
  &:not(:first-child) {
    margin-top: 10vh;
  }
`;

const Title = styled.div`
  font-family: Unbounded, sans-serif;
  font-size: 5vw;

  @media (max-width: 767px) {
    font-size: 30px;
  }
`;

const LinkTitle = styled(Link)`
  font-family: Unbounded, sans-serif;
  font-size: 5vw;
  color: ${colors.light};
  text-decoration: none;

  &:hover {
    font-style: italic;
    transition: all 0.5s;
  }

  @media (max-width: 767px) {
    font-size: 30px;
  }
`;

const Period = styled.div`
  font-family: Unbounded, sans-serif;
  font-weight: 300;
  font-size: 2vw;
  line-height: 2;

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

const Description = styled.div`
  margin-top: 2vh;
  font-size: 14px;
  line-height: 1.5;
  white-space: pre-line;
`;

const ImageGrid = styled.div`
  margin-top: 2vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;

  @media (max-width: 479px) {
    display: flex;
    flex-direction: column;
  }
`;

const Gif = styled.img`
  width: 100%;
`;
