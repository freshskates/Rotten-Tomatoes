import "./App.css";
import Row from "./components/Row";
import Movie from "./components/Movie";
import requests from "./controller/requests";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/movie/:id">
        <Movie />
      </Route>
      <Route exact path="/">
        <div className="App">
          <Row fetchURL={requests.fetchLatest} />
          <Row fetchURL={requests.fetchLatest} />
          <Row fetchURL={requests.fetchLatest} />
        </div>
      </Route>
    </Router>
  );
}

export default App;
