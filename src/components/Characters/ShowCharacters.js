import React from "react";

import CharactersMainInfo from "./CharactersMainInfo";

const ShowCharacters = (props) => {
  const character = props.location.state.state.character;
  console.log(character);
  return (
    <div>
      <CharactersMainInfo c={character} />
    </div>
  );
};

export default ShowCharacters;
