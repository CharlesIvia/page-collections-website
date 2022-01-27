//Required imports
import { HashRouter, Switch, Route } from "react-router-dom";
import "./css/Normalize.css";
import "./css/App.css";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Cart } from "./components/Cart";
import { Register } from "./components/Register";
import { PersonalGrowth } from "./components/PersonalGrowth";
import { ChildrenBooks } from "./components/ChildrenBooks";
import { NonFiction } from "./components/NonFiction";
import { Novels } from "./components/Novels";
import { Biographies } from "./components/Biographies";
import { Textbooks } from "./components/Textbooks";

//Handling routing
function App() {
  return (
    <div className="App">
      <HashRouter>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/shopping-cart">
              <Cart />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/personal-growth">
              <PersonalGrowth />
            </Route>
            <Route exact path="/non-fiction">
              <NonFiction />
            </Route>
            <Route exact path="/novels">
              <Novels />
            </Route>
            <Route exact path="/children-books">
              <ChildrenBooks />
            </Route>
            <Route exact path="/biographies">
              <Biographies />
            </Route>
            <Route exact path="/textbooks">
              <Textbooks />
            </Route>
          </Switch>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
