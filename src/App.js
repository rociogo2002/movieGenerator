import "./index.css";
import "./App.css";
import MovieGenerator from "./Components/MovieGenerator";

const App = () => {
  return (
    <div className="container">
      <div className="title">
        <h1> Random Movie Generator</h1>
      </div>
      <div className="movie-generator">
        <MovieGenerator />
      </div>
    </div>
  );
};

export default App;
