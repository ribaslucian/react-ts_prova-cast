import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import SignIn from '../pages/SingIn'
import Dashboard from '../pages/Dashboard'

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    )
}