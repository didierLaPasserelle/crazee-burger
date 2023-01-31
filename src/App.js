import logo from "./logo.svg"
import "./App.css"
import LoginPage from "./components/pages/login/LoginPage";
import { Route, Routes } from "react-router-dom";
import OrderPage from "./components/pages/order/OrderPage";
import ErrorPage from "./components/pages/error/ErrorPage";

function App(){
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/order/:username" element={<OrderPage />} /> {/* le : signifie que cette route peut accueillir des variables de manière dynamique */}
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}

export default App;


