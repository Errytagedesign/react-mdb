import React from "react";

// Styles
import { Wrapper, Content } from "./MovieGrid.styles";

function MovieGrid(props) {
  const { header, children } = props;
  return (
    <div>
      <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>
      </Wrapper>
    </div>
  );
}

export default MovieGrid;
