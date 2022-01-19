import React from "react";
import { Wrapper, Image } from "./ActorStyles";

function Actor({ name, character, imageUrl }) {
  return (
    <div>
      <Wrapper>
        <Image src={imageUrl} alt="Actor-thumbnails  " />
        <h3>{name}</h3>
        <div className="overlay">
          <p>Character Name:</p>
          <h3>{character} </h3>
        </div>
      </Wrapper>
    </div>
  );
}

export default Actor;
