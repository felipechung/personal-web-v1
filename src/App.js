import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Main from "./pages/Main/Main";
import Portfolio from "./pages/Portfolio/Portfolio";

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
