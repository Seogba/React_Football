import "./App.css";
import TopNav from "./Components/TopNav";
import Content from "./Components/Content";
import BottomNav from "./Components/BottomNav.js";

function Football() {
  return (
    <div className="App">
      <TopNav />
      <Content />
      <BottomNav />
    </div>
  );
}

export default Football;
