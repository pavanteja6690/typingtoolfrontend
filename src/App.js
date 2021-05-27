import "./App.css";
import Signup from "./components/signup/signup";
import Login from "./components/login/login";
import Homepage from "./components/typingarea/typingarea";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Statistics from "./components/statistics/statistics";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/statistics" component={Statistics} />
          <Route path="/" component={Homepage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
