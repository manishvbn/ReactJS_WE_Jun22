import React, { lazy, Suspense } from 'react';
import { Routes, Route, Link, useLocation, Navigate } from "react-router-dom";

import authenticatorClient from "../services/authenticator-api-client";

// Eager Loading
import HomeComponent from '../components/home/HomeComponent';
import LoaderAnimation from '../components/common/LoaderAnimation';
import { ProductDetailsComponent, ProductNotSelectedComponent } from '../components/products/ProductsComponent';

// Lazy Loading
const AboutComponent = lazy(() => import('../components/about/AboutComponent'));
const AdminComponent = lazy(() => import('../components/admin/AdminComponent'));
const LoginComponent = lazy(() => import('../components/login/LoginComponent'));
const ProductsComponent = lazy(() => import('../components/products/ProductsComponent'));

const img404 = require('../assets/http-404.jpg');

const productsData = [
    {
        id: 1,
        name: "Item One",
        description:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        status: "Available"
    },
    {
        id: 2,
        name: "Item Two",
        description: "sunt aut facere ptio reprehenderit",
        status: "Not Available"
    },
    {
        id: 3,
        name: "Item Three",
        description: "provident occaecati excepturi optio reprehenderit",
        status: "Available"
    },
    {
        id: 4,
        name: "Item Four",
        description: "reprehenderit",
        status: "Not Available"
    }
];

const RequireAuth = ({ children }) => {
    let location = useLocation();

    if (authenticatorClient.isAuthenticated) {
        return children;
    } else {
        return <Navigate to='/login' state={{ from: location }} />
    }
}

export default (
    <Suspense fallback={<LoaderAnimation />}>
        <Routes>
            <Route exact path="/" element={<HomeComponent />} />
            <Route path="/about" element={<AboutComponent />} />
            <Route path="/products" element={<ProductsComponent productsData={productsData} />}>
                <Route path="" element={<ProductNotSelectedComponent />} />
                <Route path=":productId" element={<ProductDetailsComponent data={productsData} />} />
            </Route>
            <Route path="/admin" element={
                <RequireAuth>
                    <AdminComponent />
                </RequireAuth>
            } />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="*" element={<NoMatch />} />
        </Routes>
    </Suspense>
);

function NoMatch() {
    let location = useLocation();

    return (
        <div className="text-center">
            <article>
                <h1 className="text-danger">No match for <code>{location.pathname}</code></h1>
                <h4 className="text-danger">Please check your Route Configuration</h4>
                <div className="mt-5">
                    <img src={img404} alt="Not Found" className="rounded" />
                </div>
                <h2 className="mt-5">
                    <Link className="nav-link" to="/">Back to Home</Link>
                </h2>
            </article>
        </div>
    );
}