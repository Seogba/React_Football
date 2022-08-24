import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/App.css";
import TopNav from "./Components/TopNav";
import BottomNav from "./Components/BottomNav.js";
import Home from "./Components/Home";
import League from "./Components/League";
import Ranking from "./Components/Ranking";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <>
            <TopNav />
            <Route path="/rankings">
              <Ranking />
            </Route>
            <Route path="/leagues">
              <League />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            <BottomNav />
          </>
        </Switch>
      </Router>
    </>
  );
}

export default App;
