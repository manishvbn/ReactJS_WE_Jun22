import React, { lazy, Suspense } from 'react';
import { Switch, Route, Link, useLocation } from "react-router-dom";

import HomeComponent from '../components/home/HomeComponent';
import LoaderAnimation from '../components/common/LoaderAnimation';

const AboutComponent = lazy(() => import('../components/about/AboutComponent'));

const img404 = require('../assets/http-404.jpg');

export default (
    <Suspense fallback={<LoaderAnimation />}>
        <Switch>
            <Route exact path="/" component={HomeComponent} />
            <Route path="/about" component={AboutComponent} />
            <Route path="*">
                <NoMatch />
            </Route>
        </Switch>
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