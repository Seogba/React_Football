import "../css/TopNav.css";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <nav id="top-nav">
      <div className="main-logo">
        <h1>
          <Link to="/">Soccer</Link>
        </h1>
      </div>

      <ul className="topNav-Content">
        <li>
          <Link to="/leagues">리그</Link>
        </li>
        <li>
          <Link to="/rankings">랭킹</Link>
        </li>
        <li>팀정보</li>
      </ul>
    </nav>
  );
};

export default TopNav;
