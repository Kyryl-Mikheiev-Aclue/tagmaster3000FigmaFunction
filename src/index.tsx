import React from "react";
import ReactDOMClient from "react-dom/client";
import { Startseite } from "./screens/Startseite";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Startseite />);
