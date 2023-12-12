import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    createBrowserRouter, Outlet,
    RouterProvider
} from "react-router-dom";
import App, {appLoader} from './App';
import Orders, {ordersLoader} from "./pages/Orders";
import SalesQuality, {salesQualityLoader} from "./pages/SalesQuality";
import CustomerReviews, {customerReviewsLoader} from "./pages/CustomerReviews";
import Login, {loginLoader} from "./pages/Login";
import NotFound from "./pages/NotFound";
import Home, {homeLoader} from "./pages/Home";
import I18n from "./components/I18n";

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
        <I18n>
            <RouterProvider router={router}/>
        </I18n>
    </React.StrictMode>
);
