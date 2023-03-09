import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import ContainerApp from "./pages/ContainerApp";

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
            ],
        },
    ],
    {
        basename: "/",
    }
);

export default routers;
