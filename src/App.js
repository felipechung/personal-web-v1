import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Main from "./pages/Main/Main";
import Portfolio from "./pages/Portfolio/Portfolio";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import LeftButtons from "./components/SideButtons/LeftButtons/LeftButtons";
import RightButtons from "./components/SideButtons/RightButtons/RightButtons";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Portfolio />
      <About />
      <Contact />
      <LeftButtons />
      <RightButtons />
    </div>
  );
}

export default App;
