import React, { useState } from "react";
import Card from "./Card";
import Daylife from "../img/daylife.jpeg";
import Nightlife from "../img/nightlife.jpg";
import { ButtonRoute } from "./Button";
import { ArrowForward, ArrowRight } from "./HeroElements";
import { InfoContainer, InfoWrapper } from "./InfoElements";

const InfoSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <InfoContainer id="info">
        <InfoWrapper>
          <Card
            title="Slip the bounds of time"
            imageUrl={Daylife}
            text="The Nautilus is your luxury bohemian hideaway in the Maldives. A highly personalised, immensely private luxury resort in Maldives with 26 beach and ocean houses where every experience is tailored to you."
          />

          <Card
            title="Liberate Your Palate
"
            imageUrl={Nightlife}
            text="Eat when you’re hungry, drink Champagne in bed. No opening or closing times; no dress codes. Come as you are, enjoy great company and indulge in a shared passion for extraordinary cuisine at this luxury Maldives beach resort."
          />
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
