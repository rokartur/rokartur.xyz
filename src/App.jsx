import "./assets/styles/Style.scss";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./router/Home";
import Experience from "./router/Experience";
import Projects from "./router/Projects";
import Bongocat from "./router/Projects/bongocat";
import Nethizer from "./router/Projects/nethizer";
import MechanikTG from "./router/Projects/mechaniktg";


export default function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path={"/"} element={<Home/>} />
                    <Route path={"/experience"} element={<Experience/>} />
                    <Route path={"/projects"} element={<Projects/>} />
                    <Route path={"/projects/bongocat"} element={<Bongocat/>} />
                    <Route path={"/projects/nethizer"} element={<Nethizer/>} />
                    <Route path={"/projects/mechaniktg"} element={<MechanikTG/>} />
                </Routes>
            </Router>
        </div>
    );
}