import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Main from "./pages/Main/Main";
import Portfolio from "./pages/Portfolio/Portfolio";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import SideButtons from "./components/SideButtons/SideButtons";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Portfolio />
      <About />
      <Contact />
      <SideButtons />
    </div>
  );
}

export default App;
