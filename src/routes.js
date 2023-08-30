import Home from "./pages/Home.page";
import AboutUs from "./pages/About.page";
import Error from "./pages/Error.page";
import Housing from "./pages/Housing.page";

const routes = {
  Home: { path: "/", Element: Home, id: "homePage" },
  Aboutus: { path: "/aboutUs", Element: AboutUs, id: "aboutUsPage" },
  Error: { path: "*", Element: Error, id: "errorPage" },
  Housing: { path: "/housing", Element: Housing, id: "housingPage" },
};

export default routes;
