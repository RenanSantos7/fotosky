import Login from "../screens/Login";
import AppRoutes from "./app.routes";

export default function Routes() {
    const isLoggedIn = false;

    return isLoggedIn ? <AppRoutes /> : <Login />
};
