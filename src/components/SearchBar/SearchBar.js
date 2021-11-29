import React, { useState, useEffect, useRef } from "react";
import { Content, Wrapper, Icons } from "./SearchBar.styles";

function SearchBar({ setSearchTerm }) {
  const initial = useRef(true);
  const [initials, setInitials] = useState("");

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }

    const timer = setTimeout(() => {
      setSearchTerm(initials);
    }, 2000);

    return () => clearImmediate(timer);
  }, [setSearchTerm, initials]);

  return (
    <div>
      <Wrapper>
        <Content>
          <Icons />{" "}
          <input
            type="text"
            placeholder="Search Movies"
            onChange={(event) => setInitials(event.currentTarget.value)}
            value={initials}
          />
        </Content>
      </Wrapper>
    </div>
  );
}

export default SearchBar;
