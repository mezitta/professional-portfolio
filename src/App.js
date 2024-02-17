import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="App">
      {/* <header className="App-header">
        
      </header> */}
      <Navbar />
      <Home />

      <div className="container-fluid page-section section-1" id="about">
        <div className="row section-title"></div>
        <div className="row section-body">
          <div className="col">
            <div className="sub-section-title"></div>
          </div>
          <div className="col">
            <div className="sub-section-title"></div>
          </div>
        </div>
      </div>

      <div className="container-fluid page-section section-2" id="work">
        <div className="row section-title"></div>
        <div className="row section-body">
          <div className="col">
            <div className="sub-section-title"></div>
          </div>
          <div className="col">
            
          </div>
        </div>
      </div>

      <div className="container-fluid page-section section-1" id="projects">
        <div className="row section-title"></div>
        <div className="row section-body">
          <div className="col">
            <div className="sub-section-title"></div>
          </div>
          <div className="col">
            
          </div>
        </div>
      </div>

      <div className="container-fluid page-section section-2" id="contact">
        <div className="row section-title"></div>
        <div className="row section-body">
          <div className="col">
            <div className="sub-section-title"></div>
          </div>
          <div className="col">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
