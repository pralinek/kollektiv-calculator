import "./App.css";
import Sliders from "./Sliders";
import Header from "./Header"

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="App-container">
        <div className="Slider-container">
          <Sliders />
        </div>
      </div>
    </div>
  );
}

export default App;
