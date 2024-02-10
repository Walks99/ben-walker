import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import ExploreMyWork from "./pages/myWork/MyWork";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exploremywork" element={<ExploreMyWork />} />
    </Routes>
  );
}

export default App;
