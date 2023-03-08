import { Outlet, Router, RouterProvider, useLocation } from "react-router-dom";

import Explorer from "./ui/components/surface/Explorer/Explorer";
import Footer from "./ui/components/surface/Footer/Footer";
import Header from "./ui/components/surface/Header/Header";
import TabBar from "./ui/components/surface/TabBar/TabBar";

import routers from "./routers";
import NavBar from "./ui/components/navigation/NavBar/NavBar";
import ContainerApp from "./pages/ContainerApp";

function App() {
    return <ContainerApp />;
}

export default App;
