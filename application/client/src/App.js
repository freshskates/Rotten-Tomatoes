import "./App.css";
import Row from "./components/Row";
import Movie from "./components/Movie";
import Banner from "./components/Banner";
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
    <div className="app">
      <Router>
        <Route path="/movie/:id">
          <Movie />
        </Route>
        <Route exact path="/">
          <div className="App">
            <Banner />
            <Row title="Trending Now" fetchURL={requests.fetchLatest} />
            <Row title="Netflix Originals" fetchURL={requests.fetchLatest} />
            <Row title="Top Rated" fetchURL={requests.fetchLatest} />
            <Row title="Action Movies" fetchURL={requests.fetchLatest} />
          </div>
        </Route>
      </Router>
    </div>
  );
}

export default App;
