import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import App from "./App";
import routers from "./routers";
import "./ui/style/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={routers} />
);
