import React from "react";
import { Card, Dropdown } from "react-bootstrap";
import "./Characters.css";
import { useHistory } from "react-router-dom";
import { CharacterDetails } from "../../service/CharacterDetails";
import { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import text from "../../text-test1.png";

function Characters() {
  //characters API, place where the data is called from
  let charArray = CharacterDetails();
  let history = useHistory();

  //The state for the search function
  const [searchHero, setSearchHero] = useState("");

  //Changes the view on character array change (filter)
  useEffect(() => {}, [charArray]);

  // function to filter their alignment
  function sortAlign(alignment) {
    charArray.sort(
      (a, b) =>
        b.biography.alignment.indexOf(alignment) -
        a.biography.alignment.indexOf(alignment)
    );
  }

  //Name sorting function
  function ascending(obj) {
    obj.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
  }

  //Name sorting function
  function descending(obj) {
    obj.sort((a, b) => (b.name > a.name ? 1 : a.name > b.name ? -1 : 0));
  }

  //sort by overall power
  function sortPower(sort) {
    if (sort === "low") {
      charArray.sort(function (a, b) {
        return (
          a.powerstats.intelligence +
          a.powerstats.strength +
          a.powerstats.speed +
          a.powerstats.durability +
          a.powerstats.power +
          a.powerstats.combat -
          (b.powerstats.intelligence +
            b.powerstats.strength +
            b.powerstats.speed +
            b.powerstats.durability +
            b.powerstats.power +
            b.powerstats.combat)
        );
      });
    }

    if (sort === "high") {
      charArray.sort(function (a, b) {
        return (
          b.powerstats.intelligence +
          b.powerstats.strength +
          b.powerstats.speed +
          b.powerstats.durability +
          b.powerstats.power +
          b.powerstats.combat -
          (a.powerstats.intelligence +
            a.powerstats.strength +
            a.powerstats.speed +
            a.powerstats.durability +
            a.powerstats.power +
            a.powerstats.combat)
        );
      });
    }
  }

  // sends character information on card click to the next page
  function getCharacterDetails(character) {
    history.push(`/Character/${character.id}`, { state: { character } });
    console.log(character);
  }

  //The information displayed on each card
  const renderCard = (card, index) => {
    return (
      <Card
        style={{ width: "10rem" }}
        className="box"
        id="scale"
        border="dark"
        key={index}
        onClick={() => getCharacterDetails(card)}
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
      <div className="background-image">
        <div className="charactersDiv">
          <div className="characters-header">
            <img className="charImg" src={text} />
          </div>
          <div className="filter">
            <span className="filter-word">FILTER HEROES</span>
            <span className="dropdownToggle">
              <Dropdown>
                <Dropdown.Toggle
                  size="md"
                  variant="secondary"
                  id="dropdown-basic"
                >
                  Names
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown">
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={() => ascending(charArray)}
                  >
                    A - Z
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-2"
                    onClick={() => descending(charArray)}
                  >
                    Z - A
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </span>
            <span className="dropdownToggle">
              <Dropdown>
                <Dropdown.Toggle
                  size="md"
                  variant="secondary"
                  id="dropdown-basic"
                >
                  Alignments
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown">
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={() => sortAlign("good")}
                  >
                    GOOD
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-2"
                    onClick={() => sortAlign("bad")}
                  >
                    EVIL
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-3"
                    onClick={() => sortAlign("neutral")}
                  >
                    NEUTRAL
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </span>
            <span className="dropdownToggle">
              <Dropdown>
                <Dropdown.Toggle
                  size="md"
                  variant="secondary"
                  id="dropdown-basic"
                >
                  Power
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown">
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={() => sortPower("low")}
                  >
                    Lowest - Highest
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-2"
                    onClick={() => sortPower("high")}
                  >
                    Highest - Lowest
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </span>
            <span className="search-bar">
              <input
                type="text"
                placeholder="Search for Hero..."
                onChange={(event) => setSearchHero(event.target.value)}
              />
            </span>
          </div>
          <div className="selection-box">
            <div className="grid-box">
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
    </>
  );
}

export default Characters;
