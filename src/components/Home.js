import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Home = () => {
  return (
    <div className="container-fluid home-container">
      <div className="header-card">
        <div className="info-section">
          <div className="info-wrapper">
            <div className="header-title">
              <div className="header">
                <h1>Michael Zitta</h1>
              </div>
              <div className="sub-header">
                <h4>Full Stack Developer</h4>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/mezitta" target="blank">
                <i class="bi bi-github" />
              </a>

              <a href="https://www.linkedin.com/in/michael-zitta/" target="blank">
                <i class="bi bi-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
