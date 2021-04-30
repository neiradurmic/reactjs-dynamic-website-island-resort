import React, { useState } from "react";
import Video from "../video/video1.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  HeroSpan,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { ButtonScroll } from "../components/Button";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Oceanside houses Maldives</HeroH1>
        <HeroP>
          That most elusive desire: total privacy, unimpeded. At Oceanside, only
          26 beach and ocean houses line our shores{" "}
          <HeroSpan>
            – each a personal sanctum with its own separate living room and
            private pool, infusing the comforts of home with a bohemian whimsy
            that invites you into the barefoot life.
          </HeroSpan>
        </HeroP>
        <HeroBtnWrapper>
          <ButtonScroll
            to="info"
            smooth={true}
            duration={1000}
            spy={true}
            exact="true"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="false"
            dark="true"
          >
            Discover More {hover ? <ArrowForward /> : <ArrowRight />}
          </ButtonScroll>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
