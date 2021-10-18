import React from "react";
import { Card } from "react-bootstrap";
import "./Characters.css";

function Characters() {
  const cardInfo = [
    {
      image:
        "https://www.pixel4k.com/wp-content/uploads/2020/08/dark-batman_1596915655-1536x864.jpg",
      title: "Batman",
    },
    {
      image: "https://mcdn.wallpapersafari.com/medium/33/92/D3McWT.jpg",
      title: "Superman",
    },
    {
      image: "https://mcdn.wallpapersafari.com/medium/30/20/wCtpzO.jpg",
      title: "Green Lantern",
    },
    {
      image:
        "https://comicvine.gamespot.com/a/uploads/scale_super/11122/111220684/4465378-2154529296-shaza.jpg",
      title: "Shazam!",
    },
    {
      image: "https://wallpapercave.com/wp/wp6282474.jpg",
      title: "Cyborg",
    },
    {
      image: "https://wallpapercave.com/wp/wp5079970.jpg",
      title: "Wonder Woman",
    },
    {
      image: "https://wallpapercave.com/wp/wp6747495.jpg",
      title: "Martian Manhunter",
    },
    {
      image: "https://wallpapercave.com/wp/wp2173541.jpg",
      title: "Aquaman",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <Card
        style={{ width: "25rem" }}
        className="bg-dark text-white"
        key={index}
        className="scale"
      >
        <Card.Header>{card.title}</Card.Header>
        <Card.Img src="holder.js/100px270" src={card.image} />
        <Card.ImgOverlay></Card.ImgOverlay>
      </Card>
    );
  };

  return (
    <>
      <div className="characters-header">CHOOSE YOUR HERO</div>
      <div className="filter">filter</div>
      <div className="grid-box">{cardInfo.map(renderCard)}</div>
    </>
  );
}

export default Characters;
