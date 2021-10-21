import React from "react";
import { CharacterDetails } from "../../service/CharacterDetails";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import AOS from "aos";

const HeroDisplay = () => {
  const heroArray = CharacterDetails();

  let random = heroArray.sort(() => 0.5 - Math.random()).slice(0, 3);
  useEffect(() => {}, [random]);
  useEffect(() => {
    AOS.init();
  }, []);

  console.log(random);

  //The information displayed on each card
  const renderCard = (card, index) => {
    return (
      <Card className="heroCard" key={index}>
        <Card.Img style={{ borderRadius: "0.4rem" }} src={card.images.lg} />
        <Card.ImgOverlay>
          <Card.Title className="character-names-home">
            {card.name}
            {/* {card.biography.fullName} */}
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
    );
  };

  return (
    <div data-aos="zoom-in" className="HeroDisplay">
      <h1>Heroes of the day</h1>
      <div className="HeroCards">{random.map(renderCard)}</div>
    </div>
  );
};

export default HeroDisplay;
