import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import SignIn from '../pages/SingIn'
import Dashboard from '../pages/Dashboard'
import Tableless from "../pages/Tablelss";

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/exerc3_tableless" element={<Tableless />} />
            </Routes>
        </Router>
    )
}