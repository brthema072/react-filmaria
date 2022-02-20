import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header"

import Home from "./pages/Home"
import NotFound from "./pages/Not-Found";

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route path="*" component={ NotFound } />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;