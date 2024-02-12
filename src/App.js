import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import ExploreMyWork from "./pages/myWork/MyWork";
import Contact from './pages/contact/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exploremywork" element={<ExploreMyWork />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
