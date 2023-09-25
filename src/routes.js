import Home from "./pages/Home.page";
import AboutUs from "./pages/About.page";
import Error from "./pages/Error.page";
import Housing from "./pages/Housing.page";

export const home = { path: "/", Element: Home };
export const aboutUs = { path: "/aboutus", Element: AboutUs };
export const error = { path: "*", Element: Error };
export const housing = { path: "/housing/:id", Element: Housing };
