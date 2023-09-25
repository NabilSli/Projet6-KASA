import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout.jsx";

import { home, aboutUs, error, housing } from "./routes.js";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={home.path} element={<home.Element />} />
          <Route path={aboutUs.path} element={<aboutUs.Element />} />
          <Route path={error.path} element={<error.Element />} />
          <Route path={housing.path} element={<housing.Element />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
