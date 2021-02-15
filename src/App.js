import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <div>
        <Main></Main>
        <Portfolio></Portfolio>
      </div>
    </div>
  );
}

export default App;
