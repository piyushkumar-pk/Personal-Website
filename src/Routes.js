import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../src/App";
import KnowMore from "./core/KnowMore";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/KnowMore/:id" exact component={KnowMore} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
