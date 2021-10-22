import React from "react";
import { Card, Img } from "react-bootstrap";
import "./Versus.css";
import { CharacterDetails } from "../../service/CharacterDetails";
import { useState, useEffect } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import SearchIcon from "@mui/icons-material/Search";

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
  const [player1Overall, setPlayer1Overall] = useState(0);
  const [player2Overall, setPlayer2Overall] = useState(0);

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
      let overall =
        cardStats + cardStrength + cardIntel + cardSpeed + cardDura + cardPower;
      setPlayer1Overall(overall);
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
      let overall =
        cardStats + cardStrength + cardIntel + cardSpeed + cardDura + cardPower;
      setPlayer2Overall(overall);
      setFlag(true);
    }
  }

  const [searchHero, setSearchHero] = useState("");

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
          <Card.Title className="character-names-versus">
            {card.name}
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
    );
  };

  return (
    <div className="background">
      <div className="versus-div">
        <div className="mid-section">
          <div className="search-bar-versus">
            <SearchIcon fontSize="large" />
            <input
              type="text"
              placeholder="Search for Hero.."
              onChange={(event) => setSearchHero(event.target.value)}
            />
          </div>
        </div>

        <div className="pick-hero">
          <div className="first-box">
            <Card className="left-hero">
              <Card.Img className="left-sp" src={player1} />
              <Card.Title className="overall-pos1">
                Overall: {player1Overall}
              </Card.Title>
              <Card.ImgOverlay className="leftImageOverlay">
                <Card.Title className="player1Name">{player1Name}</Card.Title>
              </Card.ImgOverlay>
            </Card>
            <Card className="stats-left-hero1" style={{ width: 140 }}>
              <CircularProgressbarWithChildren
                value={player1Stats}
                styles={buildStyles({
                  pathColor: "#99D98C",
                  trailColor: "#E0FAFA",
                  backgroundColor: "#E0FAFA",
                })}
              >
                <div>
                  Combat: <text> </text>
                  <strong>{player1Stats}</strong>
                </div>
              </CircularProgressbarWithChildren>
              <CircularProgressbarWithChildren
                value={player1Strength}
                styles={buildStyles({
                  pathColor: "#99D98C",
                  trailColor: "#E0FAFA",
                })}
              >
                <div>
                  Strength: <text> </text>
                  <strong>{player1Strength}</strong>
                </div>
              </CircularProgressbarWithChildren>
              <CircularProgressbarWithChildren
                value={player1Intel}
                styles={buildStyles({
                  pathColor: "#99D98C",
                  trailColor: "#E0FAFA",
                })}
              >
                <div>
                  Intelligence: <text> </text>
                  <strong>{player1Intel}</strong>
                </div>
              </CircularProgressbarWithChildren>
            </Card>
            <Card className="stats-left-hero2" style={{ width: 140 }}>
              <CircularProgressbarWithChildren
                value={player1Speed}
                styles={buildStyles({
                  pathColor: "#99D98C",
                  trailColor: "#E0FAFA",
                })}
              >
                <div>
                  Speed: <text> </text>
                  <strong>{player1Speed}</strong>
                </div>
              </CircularProgressbarWithChildren>
              <CircularProgressbarWithChildren
                value={player1Dura}
                styles={buildStyles({
                  pathColor: "#99D98C",
                  trailColor: "#E0FAFA",
                })}
              >
                <div>
                  Durability: <text> </text>
                  <strong>{player1Dura}</strong>
                </div>
              </CircularProgressbarWithChildren>
              <CircularProgressbarWithChildren
                value={player1Power}
                styles={buildStyles({
                  pathColor: "#99D98C",
                  trailColor: "#E0FAFA",
                })}
              >
                <div>
                  Power: <text> </text>
                  <strong>{player1Power}</strong>
                </div>
              </CircularProgressbarWithChildren>
            </Card>
          </div>
          <div className="versus">
            <img
              className="versus-image"
              src="https://i.pinimg.com/originals/06/1d/de/061dde1c16977f7d2ae3a2c6976e6a99.png"
            />
          </div>
          <div className="second-box">
            <Card className="stats-right-hero1" style={{ width: 140 }}>
              <CircularProgressbarWithChildren
                value={player2Stats}
                styles={buildStyles({
                  pathColor: "#99D98C",
                  trailColor: "#E0FAFA",
                })}
              >
                <div>
                  Combat: <text> </text>
                  <strong>{player2Stats}</strong>
                </div>
              </CircularProgressbarWithChildren>
              <CircularProgressbarWithChildren
                value={player2Strength}
                styles={buildStyles({
                  pathColor: "#99D98C",
                  trailColor: "#E0FAFA",
                })}
              >
                <div>
                  Strength: <text> </text>
                  <strong>{player2Strength}</strong>
                </div>
              </CircularProgressbarWithChildren>
              <CircularProgressbarWithChildren
                value={player2Intel}
                styles={buildStyles({
                  pathColor: "#99D98C",
                  trailColor: "#E0FAFA",
                })}
              >
                <div>
                  Intelligence: <text> </text>
                  <strong>{player2Intel}</strong>
                </div>
              </CircularProgressbarWithChildren>
            </Card>
            <Card className="stats-right-hero2" style={{ width: 140 }}>
              <CircularProgressbarWithChildren
                value={player2Speed}
                styles={buildStyles({
                  pathColor: "#99D98C",
                  trailColor: "#E0FAFA",
                })}
              >
                <div>
                  Speed: <text> </text>
                  <strong>{player2Speed}</strong>
                </div>
              </CircularProgressbarWithChildren>
              <CircularProgressbarWithChildren
                value={player2Dura}
                styles={buildStyles({
                  pathColor: "#99D98C",
                  trailColor: "#E0FAFA",
                })}
              >
                <div>
                  Durability: <text> </text>
                  <strong>{player2Dura}</strong>
                </div>
              </CircularProgressbarWithChildren>
              <CircularProgressbarWithChildren
                value={player2Power}
                styles={buildStyles({
                  pathColor: "#99D98C",
                  trailColor: "#E0FAFA",
                })}
              >
                <div>
                  Power: <text> </text>
                  <strong>{player2Power}</strong>
                </div>
              </CircularProgressbarWithChildren>
            </Card>
            <Card className="right-hero">
              <Card.Img className="right-sp" variant="top" src={player2} />
              <Card.Title className="overall-pos2">
                Overall: {player2Overall}
              </Card.Title>
              <Card.ImgOverlay className="rightImageOverlay">
                <Card.Title className="player2Name">{player2Name}</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </div>
        </div>
        <div>
          <div className="scroll">
            <div className="char-arrange">
              {" "}
              {charArray
                .filter((renderCard) => {
                  if (searchHero == "") {
                    return renderCard;
                  } else if (
                    renderCard.name
                      .toLowerCase()
                      .includes(searchHero.toLowerCase())
                  ) {
                    return renderCard;
                  }
                })
                .map(renderCard)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Versus;
