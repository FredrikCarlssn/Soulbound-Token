import { styled } from "styled-components";

import city from "../img/city-back-drop.jpg";
import softLight from "../img/soft-light-fog.png";
import CON from "../img/con-web-logo.png";
import horisontalLine from "../img/Line-fade-300.png";

const StyledAboutPage = styled.div`
  background-image: url(${city});
  min-height: 100vh;
  background-size: cover;
  background-position: bottom;
  background-attachment: fixed;
  padding: 120px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1500px;
`;

const Background = styled.div`
  background-image: url(${softLight});
  background-size: cover;
  background-position: bottom;
  background-blend-mode: multiply;
  backdrop-filter: brightness(0.7) contrast(1) blur(10px);
  min-height: 80vh;
  padding: 50px;
  border-radius: 3px;

  @media screen and (max-width: 870px) {
    padding: 0;
  }
`;

const Game = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 870px) {
    flex-direction: column;
  }
`;

const StyledP = styled.p`
  padding: 0 40px;
  font-weight: 700;

  @media screen and (max-width: 870px) {
    margin-block-start: 20px;
    margin-block-end: 10px;
    padding: 0;
  }
`;

const StyledH1 = styled.h1`
  padding-left: 15px;
`;

const YoutubePlayer = styled.div``;

const StyledImg = styled.img`
  width: 500px;

  @media screen and (max-width: 870px) {
    margin-top: -180px;
  }
`;

const StyledHl = styled.img`
  width: 100%;
`;

const Centered = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  @media screen and (max-width: 1000px) {
    transform: scale(0.7);
  }
`;

const StylediFrame = styled.iframe`
  width: 635px;
  height: 357px;
  @media screen and (max-width: 1000px) {
    width: 500px;
    height: 281px;
  }
`;

const StyledHr = styled.hr`
  @media screen and (max-width: 870px) {
    margin-top: -10px;
  }
`;

export const AboutPage = () => {
  return (
    <StyledAboutPage>
      <ContentWrapper>
        <hr />
        <Background>
          <Content>
            <Centered>
              <StyledImg src={CON} />
            </Centered>
            <StyledHl src={horisontalLine} />
            <Game>
              <YoutubePlayer>
                <StylediFrame
                  className="youtube-player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  title="Crystals of Naramunz │ Upcoming steampunk Action RPG"
                  src="https://www.youtube.com/embed/ihDAvgNi_n4?controls=1&amp;rel=0&amp;playsinline=1&amp;modestbranding=0&amp;autoplay=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.naramunz.com&amp;widgetid=1"
                  id="widget2"
                  data-gtm-yt-inspected-16="true"
                ></StylediFrame>
              </YoutubePlayer>
              <StyledP>
                Crystals of Naramunz is an upcoming free-to-play action RPG set
                in the post-apocalyptic steampunk world of Naramunz. The game is
                currently in Alpha. Inspired by Diablo and Path of Exile,
                Crystals of Naramunz offers an exciting gaming experience, a
                well-crafted barter economy, and characters with unique skills
                and talents. Ensuring high re-playability, the game utilizes
                seasonal rest, introducing new content to its players.
              </StyledP>
            </Game>
            <StyledHl src={horisontalLine} />
            <StyledH1>Soulbound Tokens</StyledH1>
            <StyledP>
              The Soulbound Token, an NFT characterized by its immutability and
              non-tradability, possesses an exceptional uniqueness reserved for
              its owner. It serves as a testament to your enduring loyalty to
              the game, reflecting your steadfast support from the alpha stages
              onward. Consider it a heartfelt expression of gratitude for your
              unwavering commitment, showcasing to the world that you are indeed
              a true OG fan!
            </StyledP>
          </Content>
        </Background>
        <StyledHr />
      </ContentWrapper>
    </StyledAboutPage>
  );
};
