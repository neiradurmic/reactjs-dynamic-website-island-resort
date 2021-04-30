import React from "react";
import IslandMap from "../img/islandmap.jpg";
import {
  AboutContainer,
  MapContainer,
  MapBg,
  AboutTextContainer,
  TextContainer,
  HeadingAbout,
  SubheadingAbout,
  TextAbout,
} from "./AboutSectionElements";

const AboutSection = () => {
  return (
    <AboutContainer>
      <MapContainer>
        <MapBg src={IslandMap}></MapBg>
      </MapContainer>
      <AboutTextContainer>
        <TextContainer>
          <HeadingAbout>DISCOVER LIFE’S RAREST TREASURES</HeadingAbout>
          <SubheadingAbout>Time Stands Still</SubheadingAbout>
          <TextAbout>
            The Nautilus transcends time. There are no clocks, no schedules, no
            opening or closing times. Here, every moment is fluid. Boundless
            freedom finds every guest…all in its own good time.
          </TextAbout>
          <SubheadingAbout>Comforts of Home</SubheadingAbout>
          <TextAbout>
            Just steps from pristine sands or perched over turquoise waters, The
            Nautilus’s houses and residences offer unrivalled space and privacy.
            Each is a secluded haven with separate living rooms, a freshwater
            swimming pool and its own private butler. Places to sink in, unwind
            and enjoy life’s greatest gifts, together.
          </TextAbout>
          <SubheadingAbout>Free Spirited Experiences</SubheadingAbout>
          <TextAbout>
            Days dance to their own rhythm at The Nautilus resort in the
            Maldives. The guest experience is one of liberation at every turn.
            Impromptu adventures on crystal-clear waters. Fluid and personal spa
            journeys. Starlit dinner dates at every turn. Narratives unfold
            without an itinerary, and without inhibition.
          </TextAbout>
        </TextContainer>
      </AboutTextContainer>
    </AboutContainer>
  );
};

export default AboutSection;
