import React from "react";

import CharactersMainInfo from "./CharactersMainInfo";
import CharactersNavbar from "./CharactersNavbar";
import CharactersPower from "./CharactersPower";

const CharacterDetails = () => {
  return (
    <div>
      <CharactersMainInfo />
      <CharactersNavbar />
      <CharactersPower />
    </div>
  );
};

export default CharacterDetails;
