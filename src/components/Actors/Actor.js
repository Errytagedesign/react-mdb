import React from "react";
import { Wrapper, Image } from "./ActorStyles";

function Actor({ name, character, imageUrl }) {
  return (
    <div>
      <Wrapper>
        <Image src={imageUrl} />
        <h3>{name}</h3>
        <p>{character} </p>
      </Wrapper>
    </div>
  );
}

export default Actor;
