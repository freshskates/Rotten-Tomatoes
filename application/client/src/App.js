import "./App.css";
import Row from "./components/Row";
import requests from "./controller/requests";
function App() {
  return (
    <div className="App">
      <Row fetchURL={requests.fetchLatest} />
      <Row fetchURL={requests.fetchLatest} />
      <Row fetchURL={requests.fetchLatest} />
    </div>
  );
}

export default App;
