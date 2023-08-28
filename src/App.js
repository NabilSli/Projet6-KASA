import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home.page";
import AboutUs from "./pages/About.page";
import Error from "./pages/Error.page";
import Housing from "./pages/Housing.page";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="*" element={<Error />} />
          <Route path="/housing" element={<Housing />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
