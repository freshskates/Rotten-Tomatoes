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
            <div className="main__row__container">
              <Row
                title="Trending Now"
                fetchURL={requests.fetchLatest}
                isLargeRow={true}
              />
              <Row title="Netflix Originals" fetchURL={requests.fetchLatest} />
              <Row title="Top Rated" fetchURL={requests.fetchLatest} />
              <Row title="Action Movies" fetchURL={requests.fetchLatest} />
            </div>
          </div>
        </Route>
      </Router>
    </div>
  );
}

export default App;
