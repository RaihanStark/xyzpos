import Dashboard from "./pages/Dashboard/Dashboard";
import Landing from "./pages/Landing/Landing";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.account.isLoggedIn);
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          {isLoggedIn ? <Dashboard /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/">
          {isLoggedIn ? <Redirect to="/dashboard" /> : <Landing />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
