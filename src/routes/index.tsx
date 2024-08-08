import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Game from "@src/pages/Game/Game";

const routes = (
    <BrowserRouter>
        <Routes>
            <Route element={<App />} >
                <Route path="/" index element={<Home />} />
                <Route path="/game/:type" element={<Game />} />
            </Route>
        </Routes>
    </BrowserRouter>
);


export default routes;
