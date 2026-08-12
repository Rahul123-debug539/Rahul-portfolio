import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home/Home";
import WorkPage from "./pages/WorkPage";

import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

import CSMentorPage from "./components/Projects/CSMentorPage/CSMentorPage";
import JobPilotPage from "./components/Projects/JobPilotPage/JobPilotPage";

import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <Navbar />

        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* ABOUT */}
          <Route
            path="/about"
            element={<About />}
          />

          {/* WORK / PROJECTS */}
          <Route
            path="/work"
            element={<WorkPage />}
          />

          {/* CS MENTOR */}
          <Route
            path="/work/cs-mentor"
            element={<CSMentorPage />}
          />

          {/* JOBPILOT AI */}
          <Route
            path="/work/jobpilot-ai"
            element={<JobPilotPage />}
          />

          {/* CONTACT */}
          <Route
            path="/contact"
            element={<Contact />}
          />

        </Routes>

        <Footer/>

      </div>
    </BrowserRouter>
  );
}

export default App;