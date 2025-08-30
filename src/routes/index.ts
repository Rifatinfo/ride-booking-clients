import App from "@/App";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { createBrowserRouter } from "react-router";
import VerifyFrontPage from "@/pages/VerifyFrontPage";
import HomeHero from "@/components/modules/home/HomeHero";
import ContactUs from "@/components/modules/contactUs/ContactUs";
import FAQ from "@/components/modules/faq/FAQ";
import FeatureLayout from "@/components/modules/feature/FeatureLayout";
import Feature from "@/components/modules/feature/Feature";
import RiderFeature from "@/components/modules/feature/RiderFeature";
import DriverFeature from "@/components/modules/feature/DriverFeature";
import AdminFeature from "@/components/modules/feature/AdminFeature";
import RideRequest from "@/components/modules/rideRequest/RideReques";
import Tracking from "@/components/modules/tracking/Tracking";

export const router = createBrowserRouter([
    {
        Component: App,
        path: "/",
        children: [
            {
                Component: HomeHero,
                path: "/",
            },
            {
                Component: ContactUs,
                path: "/contact",
            },
            {
                Component: FAQ,
                path: "/faq",
            },
            {
                Component : RideRequest,
                path: "/ride",
            },
            {
                Component : Tracking,
                path: "/tracking",
            },
            {
                Component: FeatureLayout,
                path: "/feature",
                children: [
                    {
                        Component: Feature,
                        index: true
                    },
                    {
                        Component: RiderFeature,
                        path: "rider-feature",
                    },
                    {
                        Component: DriverFeature,
                        path: "driver-feature",
                    },
                    {
                        Component: AdminFeature,
                        path: "admin-feature",
                    }
                ]
            }
        ]
    },
    {
        Component: Login,
        path: "/login",
    },
    {
        Component: Register,
        path: "/register",
    },
    {
        Component: VerifyFrontPage,
        path: "/verify",
    }
]);