import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Gallery from "../pages/Gallery";
import Contacts from "../pages/Contacts";
import Blog from "../pages/Blog";
import Team from "../components/Team";
// public routes
export const publicRoutes = [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/service", component: Services },
    { path: "/gallery", component: Gallery },
    { path: "/blog", component: Blog },
    { path: "/contact", component: Contacts },
    { path: "/team", component: Team },
];

//Private routes
export const privateRoutes = [];
