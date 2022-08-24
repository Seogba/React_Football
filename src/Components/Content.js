import "../css/App.css";
import { useState, useEffect } from "react";
import League from "./League";
import Ranking from "./Ranking";

const Content = () => {
  const [direction, setDirection] = useState(true);
  return (
    <div className="Content">
      <div className="menu">
        <div className="menu-league" onClick={() => setDirection(true)}>
          <h3>리그</h3>
        </div>
        <div className="menu-ranking" onClick={() => setDirection(false)}>
          <h3>순위</h3>
        </div>
      </div>
      {direction ? <League /> : <Ranking />}
    </div>
  );
};

export default Content;
