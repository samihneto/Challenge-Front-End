import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Agenda from "../pages/agenda";


export default function RoutesMain() {
    return (
        <Routes>
            <Route Component={ Home } path="/" />
            <Route Component={ About } path="/about" />
            <Route Component={ Agenda } path="/agenda" />
        </Routes>
    )
}