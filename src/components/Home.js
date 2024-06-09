import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Resume from "../assets/MichaelZitta2024.pdf";

const Home = () => {
  return (
    <div className="container-fluid body-container">
        <div className="row">
          <div className="col-lg-6 img-col">
            <div className="img-wrapper">
              <img
                class="potrait-photo"
                src={require("../assets/pfp.jpg")}
                alt="background"
              />
              
              <div className="card-row">
                <a className="skill-card" href="https://www.linkedin.com/in/michael-zitta/" target="blank">
                  <img
                    class="card-photo"
                    src={require("../assets/linkedcard.jpg")}
                    alt="background"
                  />
                </a>
                <a className="skill-card" href="https://github.com/mezitta" target="blank">
                  <img
                    class="card-photo"
                    src={require("../assets/githubcard.jpg")}
                    alt="background"
                  />
                </a>
              </div>
            </div>
            
          </div>
          <div className="col-lg-6 title-col">
            <h2>Limited Time Offer</h2>
            <h1>Michael Zitta</h1>
            <h1>Full Stack Developer</h1>

            <div className="sub-header">
              <p>
                Don't miss this limited time offer to hire a full stack
                developer that focuses on creating web applications.
              </p>
              <p>When this developer isn't working he enjoys cooking, drawing, playing games with friends,
                and spending time with his cat. </p>
            </div>

            <div className="tech-social">
              <div className="skills">
                <h4 className="tech-header">Technologies</h4>

                <div className="frameworks">
                  <p>Frameworks:</p>
                  <ul className="tech-list">
                    <li>Blazor, </li>
                    <li>Vue, </li>
                    <li>React</li>
                  </ul>
                </div>

                <div className="languages">
                  <p>Languages: </p>
                  <ul className="tech-list">
                    <li>C#, </li>
                    <li>Javascript, </li>
                    <li>C, </li>
                    <li>Java, </li>
                    <li>SQL</li>
                  </ul>
                </div>

                <div className="tools">
                  <p>Tools: </p>
                  <ul className="tech-list">
                    <li>Visual Studio, </li>
                    <li>Dapper, </li>
                    <li>SSMS, </li>
                    <li>IIS </li>
                  </ul>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        <div className="row additional-info-row">
          <div className="col additional-info">
            <div className="info-wrapper">
                <h3 className="email-txt email-now">email now</h3>
                <h3 className="email-txt">michaelezitta@gmail.com</h3>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
          <a class="resume-link" rel="noreferrer" href={Resume} target="_blank">
                <img
                  class="resume-img"
                  src={require("../assets/seemycv.png")}
                  alt="background"
                />
              </a>
          </div>
        </div>
      </div>
  );
};

export default Home;
