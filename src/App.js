import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="container-fluid body-container">
        <div className="row">
          <div className="col-lg-6">
            <img class="potrait-photo" src={require('./assets/pfp.jpg')} alt="background"/>
          </div>
          <div className="col-lg-6 title-col">
            <h2>Limited Time Offer</h2>
            <h1>Michael Zitta</h1>
            <h1>Full Stack Developer</h1>
            <div className="sub-header">
              <p>Don't miss this limited time offer to hire a full stack developer that
                focuses on creating responsive web applications.
              </p>
            </div>
          </div>
        </div>

        <div className="row additional-info-row">
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
