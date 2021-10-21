import React from "react";
import { Card, Img } from "react-bootstrap";
import "./Versus.css";
import { CharacterDetails } from "../../service/CharacterDetails";
import { useState, useEffect } from "react";

function Versus() {
  let charArray = CharacterDetails();
  const [player1, setPlayer1] = useState([]);
  const [player2, setPlayer2] = useState([]);
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");
  const [player1Stats, setPlayer1Stats] = useState([]);
  const [player2Stats, setPlayer2Stats] = useState([]);
  const [player1Strength, setPlayer1Strength] = useState([]);
  const [player2Strength, setPlayer2Strength] = useState([]);
  const [player1Intel, setPlayer1Intel] = useState([]);
  const [player2Intel, setPlayer2Intel] = useState([]);
  const [player1Speed, setPlayer1Speed] = useState([]);
  const [player2Speed, setPlayer2Speed] = useState([]);
  const [player1Dura, setPlayer1Dura] = useState([]);
  const [player2Dura, setPlayer2Dura] = useState([]);
  const [player1Power, setPlayer1Power] = useState([]);
  const [player2Power, setPlayer2Power] = useState([]);

  const [flag, setFlag] = useState(true);

  useEffect(() => {}, [player1, player2]);

  function selectPlayer(
    cardName,
    cardImage,
    cardStats,
    cardStrength,
    cardIntel,
    cardSpeed,
    cardDura,
    cardPower
  ) {
    if (flag) {
      setPlayer1(cardImage);
      setPlayer1Name(cardName);
      setPlayer1Stats(cardStats);
      setPlayer1Strength(cardStrength);
      setPlayer1Intel(cardIntel);
      setPlayer1Speed(cardSpeed);
      setPlayer1Dura(cardDura);
      setPlayer1Power(cardPower);
      setFlag(false);
    } else {
      setPlayer2(cardImage);
      setPlayer2Name(cardName);
      setPlayer2Stats(cardStats);
      setPlayer2Strength(cardStrength);
      setPlayer2Intel(cardIntel);
      setPlayer2Speed(cardSpeed);
      setPlayer2Dura(cardDura);
      setPlayer2Power(cardPower);
      setFlag(true);
    }
  }

  const renderCard = (card, index) => {
    return (
      <Card
        className="hero-box"
        border="dark"
        style={{ width: "7rem" }}
        key={index}
        onClick={() =>
          selectPlayer(
            card.name,
            card.images.lg,
            card.powerstats.combat,
            card.powerstats.strength,
            card.powerstats.intelligence,
            card.powerstats.speed,
            card.powerstats.durability,
            card.powerstats.power
          )
        }
      >
        <Card.Img src={card.images.lg} />
        <Card.ImgOverlay className="selection-shadow">
          <Card.Title className="character-names">{card.name}</Card.Title>
        </Card.ImgOverlay>
      </Card>
    );
  };

  return (
    <>
      <div className="mid-section"></div>

      <div className="pick-hero">
        <div className="first-box">
          <Card className="left-hero">
            <Card.Img className="left-sp" variant="top" src={player1} />
          </Card>
          <Card>
            <Card.Title>{player1Name}</Card.Title>
            <Card.Title>Combat: {player1Stats}</Card.Title>
            <Card.Title>Strength: {player1Strength}</Card.Title>
            <Card.Title>Intelligence: {player1Intel}</Card.Title>
            <Card.Title>Speed: {player1Speed}</Card.Title>
            <Card.Title>Durability: {player1Dura}</Card.Title>
            <Card.Title>Power: {player1Power}</Card.Title>
          </Card>
        </div>
        <div className="versus">Versus</div>
        <div className="second-box">
          <Card>
            <Card.Title>{player2Name}</Card.Title>
            <Card.Title>Combat: {player2Stats}</Card.Title>
            <Card.Title>Strength: {player2Strength}</Card.Title>
            <Card.Title>Intelligence: {player2Intel}</Card.Title>
            <Card.Title>Speed: {player2Speed}</Card.Title>
            <Card.Title>Durability: {player2Dura}</Card.Title>
            <Card.Title>Power: {player2Power}</Card.Title>
          </Card>
          <Card className="right-hero">
            <Card.Img className="right-sp" variant="top" src={player2} />
          </Card>
        </div>
      </div>
      <div>
        <div className="scroll">
          <div className="char-arrange"> {charArray.map(renderCard)} </div>
        </div>
      </div>
    </>
  );
}

export default Versus;
