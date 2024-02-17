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

      {/* eslint-disable-next-line */}
      <a class="section-anchor" id="about" />
      <div className="container-fluid page-section section-1" >
        <div className="row">
          <div className="col-md section-body">
            <div className="sub-section-title">
              <h3>About</h3>
            </div>
          </div>
          <div className="col-md section-body">
            <div className="sub-section-title">
              <h3>Technologies</h3>
            </div>
          </div>
        </div>
      </div>

      {/* eslint-disable-next-line */}
      <a class="section-anchor" id="work" />
      <div className="container-fluid page-section section-2">
        <div className="row">
          <div className="col-md section-body">
            <div className="sub-section-title">
              <h3>Work</h3>
            </div>
          </div>
          <div className="col-md section-body">
            <h3>Tech Stack</h3>
          </div>
        </div>
      </div>

      {/* eslint-disable-next-line */}
      <a class="section-anchor" id="projects" />
      <div className="container-fluid page-section section-1">
        <div className="row">
          <div className="col-md order-md-first order-last section-body">
            <div className="sub-section-title">
              <h3>Project 1</h3>
            </div>
          </div>
          <div className="col-md order-first order-md-last proj-picture"></div>
        </div>
      </div>

      <div className="container-fluid page-section section-2">
        <div className="row">
          <div className=" col-md order-first order-md-last proj-picture"></div>
          <div className="col-md order-md-last order-first section-body">
            <div className="sub-section-title">
              <h3>Project 2</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid page-section section-1">
        <div className="row">
          <div className="col-md order-md-first order-last section-body">
            <div className="sub-section-title">
              <h3>Project 3</h3>
            </div>
          </div>
          <div className="col-md order-first order-md-last proj-picture"></div>
        </div>
      </div>
      
      {/* eslint-disable-next-line */}
      <a class="section-anchor" id="contact" />
      <div className="container-fluid page-section section-2" id="contact">
        <div className="row section-body">
          <div className="col">
            <div className="sub-section-title"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
