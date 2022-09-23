import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import MenuPage from '../pages/MenuPage'
import TablelessPage from '../pages/TablelessPage'
import ViacepFindPage from "../pages/ViacepFindPage";

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MenuPage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/exerc3_tableless" element={<TablelessPage />} />
                <Route path="/exerc4_viacep" element={<ViacepFindPage />} />
            </Routes>
        </Router>
    )
}