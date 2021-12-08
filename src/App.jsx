import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight
} from "./pages/days/index";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/day/one" element={<One />} />
          <Route path="/day/two" element={<Two />} />
          <Route path="/day/three" element={<Three />} />
          <Route path="/day/four" element={<Four />} />
          <Route path="/day/five" element={<Five />} />
          <Route path="/day/six" element={<Six />} />
          <Route path="/day/seven" element={<Seven />} />
          <Route path="/day/eight" element={<Eight />} />

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
