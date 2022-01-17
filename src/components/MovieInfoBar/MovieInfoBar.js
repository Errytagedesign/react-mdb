import React from "react";

// Helpers
import { calcTime, convertMoney } from "../../helpers";

// Styles
import { Wrapper, Content } from "./MovieInfoBar.Styles";

function MovieInfoBar({ time, budget, revenue }) {
  return (
    <div>
      <Wrapper>
        <Content>
          <div className="column">
            <p>
              Running Time: <strong>{calcTime(time)}</strong>
            </p>
          </div>
          <div className="column">
            <p>
              Budget: <strong>{convertMoney(budget)}</strong>
            </p>
          </div>
          <div className="column">
            <p>
              Revenue: <strong> {convertMoney(revenue)}</strong>
            </p>
          </div>
        </Content>
      </Wrapper>
    </div>
  );
}

export default MovieInfoBar;
