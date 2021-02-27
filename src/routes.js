import {
    ALLFEED_ROUTE,
    ALLRATING_ROUTE,
    LOGIN_ROUTE,
    PROFILE_ROUTE, PROFILEMYSUBS_ROUTE, PROFILEREPOSTS_ROUTE, PROFILESUBS_ROUTE,
    REGISTRATION_ROUTE,
    SBER_ROUTE,
    SUBSFEED_ROUTE
} from "./utils/consts";
import Auth from "./pages/Auth/Auth";
import Sber from "./pages/Sber";
import Profile from "./pages/Profile/Profile";
import AllFeed from "./pages/AllFeed/AllFeed";
import SubsFeed from "./pages/SubsFeed/SubsFeed";
import AllRating from "./pages/AllRating/AllRating";

export const authRoutes = [
    {
        path: SBER_ROUTE,
        Component: Sber
    },
    {
        path: PROFILE_ROUTE,
        Component: Profile
    },
    {
        path: ALLFEED_ROUTE,
        Component: AllFeed
    },
    {
        path: SUBSFEED_ROUTE,
        Component: SubsFeed
    },
    {
        path: ALLRATING_ROUTE,
        Component: AllRating
    },
    {
        path: PROFILESUBS_ROUTE,
        // Component: ProfileSubs
    },
    {
        path: PROFILEMYSUBS_ROUTE,
        // Component: ProfileMySubs
    },
    {
        path: PROFILEREPOSTS_ROUTE,
        // Component: ProfileReposts
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