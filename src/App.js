import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import AuthContextProvider from "./AuthContext";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <div className="app">
      <AuthContextProvider>
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard}></PrivateRoute>
            <Route path="/signup" component={SignUp}></Route>
            <Route path="/signin" component={SignIn}></Route>
          </Switch>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
