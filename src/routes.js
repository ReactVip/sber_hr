import {LOGIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE, SBER_ROUTE} from "./utils/consts";
import Auth from "./pages/Auth/Auth";
import Sber from "./pages/Sber";
import Profile from "./pages/Profile/Profile";

export const authRoutes = [
    {
        path: SBER_ROUTE,
        Component: Sber
    },
    {
        path: PROFILE_ROUTE,
        Component: Profile
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    }
]