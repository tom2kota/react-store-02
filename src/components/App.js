import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {HomePage} from "../pages/homepage/HomePage";
import {CategoryOne} from "./categories/CategoryOne";
import {CategoryTwo} from "./categories/CategoryTwo";
import {CategoryThree} from "./categories/CategoryThree";
import {CategoryFour} from "./categories/CategoryFour";
import {CategoryFive} from "./categories/CategoryFive";
import {ShopPage} from "../pages/shop/ShopPage";

export const App = () => (
    <div>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/shop" component={ShopPage}/>
                <Route path="/category_1" component={CategoryOne}/>
                <Route path="/category_2" component={CategoryTwo}/>
                <Route path="/category_3" component={CategoryThree}/>
                <Route path="/category_4" component={CategoryFour}/>
                <Route path="/category_5" component={CategoryFive}/>
            </Switch>
        </BrowserRouter>
    </div>
)

