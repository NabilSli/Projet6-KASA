import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout.jsx";

import routes from "./routes.js";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {Object.values(routes).map((route) => (
            <Route path={route.path} element={<route.Element />} key={<id />} />
          ))}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
