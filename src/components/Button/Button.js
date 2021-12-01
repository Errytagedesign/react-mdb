import React from "react";
import { Wrapper } from "./Button.Style";

function Button({ text, callback }) {
  return (
    <div className="d-flex">
      <Wrapper type="button" onClick={callback}>
        {text}
      </Wrapper>
    </div>
  );
}

export default Button;
