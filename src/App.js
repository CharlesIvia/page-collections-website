//Required imports
import { HashRouter, Switch, Route } from "react-router-dom";
import "./css/Normalize.css";
import "./css/App.css";
import { Home } from "./components/Home";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
