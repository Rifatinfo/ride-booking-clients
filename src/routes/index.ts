import App from "@/App";
import { Home } from "lucide-react";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        Component: App,
        path: "/",
        children: [
            {
                Component: Home,
                path: "/",
            }
        ]
    },
]);