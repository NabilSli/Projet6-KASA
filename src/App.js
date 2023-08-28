import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home.page";
import AboutUs from "./pages/About.page";
import Error from "./pages/Error.page";
import Housing from "./pages/Housing.page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/error" element={<Error />} />
        <Route path="/housing" element={<Housing />} />
      </Routes>
    </Router>
  );
}

export default App;
