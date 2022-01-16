import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Content } from "./BreadcrumbStyles";

function Breadcrumb({ movieTitle }) {
  return (
    <div>
      <Wrapper>
        <Content>
          <Link to="/">
            {" "}
            <span> Home</span>
          </Link>
          <span> | </span>
          <span>{movieTitle}</span>
        </Content>
      </Wrapper>
    </div>
  );
}

export default Breadcrumb;
