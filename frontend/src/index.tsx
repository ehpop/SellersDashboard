import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {createBrowserRouter, Navigate, Outlet, RouterProvider} from "react-router-dom";
import App, {appLoader} from './App';
import Orders, {ordersLoader} from "./pages/Orders";
import SalesQuality, {salesQualityLoader} from "./pages/SalesQuality";
import CustomerReviews, {customerReviewsLoader} from "./pages/CustomerReviews";
import Login, {loginLoader} from "./pages/Login";
import NotFound from "./pages/NotFound";
import Home, {homeLoader} from "./pages/Home";
import LocaleProvider from "./providers/LocaleProvider";
import AuthProvider from "./providers/AuthProvider";
import ThemeProvider from "./providers/ThemeProvider";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App><Outlet/></App>,
        loader: appLoader,
        children: [
            {
                path: "home",
                element: <Home/>,
                loader: homeLoader
            },
            {
                path: "orders",
                element: <Orders/>,
                loader: ordersLoader,
                children: [
                    {
                        path: ":orderStatus",
                        element: <Orders/>,
                        loader: ordersLoader,
                    }
                ]
            },
            {
                path: "salesQuality",
                element: <SalesQuality/>,
                loader: salesQualityLoader,
            },
            {
                path: "customerReviews",
                element: <CustomerReviews/>,
                loader: customerReviewsLoader,
            },
            {
                path: "login",
                element: <Login/>,
                loader: loginLoader,
            },
            {
                path: "",
                element: <Navigate to="/home"/>,
            }
        ],
    },
    {
        path: "*",
        element: <NotFound/>,
    }
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <LocaleProvider>
            <AuthProvider>
                <ThemeProvider>
                    <RouterProvider router={router}/>
                </ThemeProvider>
            </AuthProvider>
        </LocaleProvider>
    </React.StrictMode>
);
