import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import ContainerApp from "./pages/ContainerApp";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/projects/Projects";

const routers = createBrowserRouter(
    [
        {
            element: <ContainerApp />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "about",
                    element: <About />,
                },
                {
                    path: "contact",
                    element: <Contact />,
                },
                {
                    path: "projects",
                    element: <Projects />,
                },
            ],
        },
    ],
    {
        basename: "/",
    }
);

export default routers;
