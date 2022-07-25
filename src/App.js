import logo from "./logo.svg";
import "./App.css";
import TopNav from "./Components/TopNav";
import Content from "./Components/Content";
import BottomNav from "./Components/BottomNav.js";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Content />
      <BottomNav />
    </div>
  );
}

export default App;
