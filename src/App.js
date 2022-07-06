import "./App.css";
import Dictionary from "./Dictionary";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    

    <div className="App">
      <h1>Dictionary Search</h1>
      <Dictionary defaultKeyword="fox"/>
    </div>
    
  );
}

export default App;
