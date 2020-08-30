import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {HomePage} from "../pages/homepage/homePage";
import {CategoryOne} from "./categories/categoryOne";
import {CategoryTwo} from "./categories/categoryTwo";
import {CategoryThree} from "./categories/categoryThree";
import {CategoryFour} from "./categories/categoryFour";
import {CategoryFive} from "./categories/categoryFive";
import {ShopPage} from "../pages/shop/shopPage";

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

