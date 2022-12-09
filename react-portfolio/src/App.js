import Portfolio from "./components/portfolio";
import About from "./components/aboutme"
import Resume from "./components/resume";
import Form from "./components/contact";
import Navbar from "./navbar";
import { Route, Routes } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';



function App() {
  return (
    <div>
      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Form />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>

      <footer className="d-flex justify-content-evenly">
        <a href="https://github.com/isain1">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/isain-ibarra-4575a8193/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://twitter.com">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </footer>
    </div>
  );
}

export default App;
