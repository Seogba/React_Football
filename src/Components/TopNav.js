import "../App.css";

const TopNav = () => {
  return (
    <nav id="top-nav">
      <div className="main-logo">
        <h1>Soccer</h1>
      </div>

      <ul className="topNav-Content">
        <li>리그</li>
        <li>랭킹</li>
        <li>팀정보</li>
      </ul>
    </nav>
  );
};

export default TopNav;
