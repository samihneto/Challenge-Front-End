import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Agenda from "../pages/agenda";
import Mecv from "../pages/mv";
import Register from "../pages/register";
import Login from "../pages/login";
import Recovery from "../pages/recovery";


export default function RoutesMain() {
    return (
        <Routes>
            <Route Component={ Home } path="/" />
            <Route Component={ About } path="/about" />
            <Route Component={ Agenda } path="/agenda" />
            <Route Component={ Mecv } path="/mv" />
            <Route Component={ Register } path="/register" />
            <Route Component={ Login } path="/login" />
            <Route Component={ Recovery } path="/recovery" />
        </Routes>
    )
}