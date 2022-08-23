import logo from "./logo.svg";
import "./App.css";
import TopNav from "./Components/TopNav";
import Content from "./Components/Content";
import BottomNav from "./Components/BottomNav.js";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Home />
      {/* <Content /> */}
      <BottomNav />
    </div>
  );
}

export default App;
