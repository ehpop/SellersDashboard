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
import WorstAspectsProvider from "./providers/WorstAspectsProvider";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App><Outlet/></App>,
        loader: appLoader,
        children: [
            {
                path: "home",
                element: <ProtectedRoute><Home/></ProtectedRoute>,
                loader: homeLoader
            },
            {
                path: "orders",
                element: <ProtectedRoute><Orders/></ProtectedRoute>,
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
                element: <ProtectedRoute><SalesQuality/></ProtectedRoute>,
                loader: salesQualityLoader,
            },
            {
                path: "customerReviews",
                element: <ProtectedRoute><CustomerReviews/></ProtectedRoute>,
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
                    <WorstAspectsProvider>
                        <RouterProvider router={router}/>
                    </WorstAspectsProvider>
                </ThemeProvider>
            </AuthProvider>
        </LocaleProvider>
    </React.StrictMode>
);
