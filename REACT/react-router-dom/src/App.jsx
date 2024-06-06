import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Github from "./components/Github";

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="main_container">
          <nav className="bg-white p-4 flex justify-around">
            <div className="logo mx-8">
              <img
                className="w-24"
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                alt="Image"
              />
            </div>

            <div className="contents ">
              <ul className="flex">
                <li className="text-black mx-8 font-[500]">
                  <Link to="/">Home</Link>
                </li>
                <li className="text-black mx-8 font-[500]">
                  <Link to="/About">About</Link>
                </li>
                <li className="text-black mx-8 font-[500]">
                  <Link to="/Contact">Contact</Link>
                </li>
                <li className="text-black mx-8 font-[500]">
                  <Link to="/Github">Github</Link>
                </li>
              </ul>
            </div>

            <div className="login">
              <ul className="flex">
                <li className="text-black mx-8 font-[500]">Log in</li>
                <li className="text-white p-2 rounded-md bg-orange-600 font-[500]">Get started</li>
              </ul>
            </div>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Github" element={<Github />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
