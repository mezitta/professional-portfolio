import "./App.css";
import Home from "./components/Home"
import PageNotFound from "./components/PageNotFound";
import {
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";


const App = () => {
  return (
    <Router>
      {/* <div className="App">
        <Home />
      </div> */}
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </Router>
  );
};

export default App;
