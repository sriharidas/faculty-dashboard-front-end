import "./App.css";
import "./style.css";
import './Mobile.css';

import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import SearchContainer from "./components/Search/SearchContainer";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <SearchContainer />
      </div>
    </Router>
  );
}

export default App;
