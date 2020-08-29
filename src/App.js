import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {HomePage} from "./pages/homepage/homePage";
import {CategoryOne} from "./components/categories/categoryOne";
import {CategoryTwo} from "./components/categories/categoryTwo";
import {CategoryThree} from "./components/categories/categoryThree";
import {CategoryFour} from "./components/categories/categoryFour";
import {CategoryFive} from "./components/categories/categoryFive";

export default function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/category_1" component={CategoryOne}/>
                <Route path="/category_2" component={CategoryTwo}/>
                <Route path="/category_3" component={CategoryThree}/>
                <Route path="/category_4" component={CategoryFour}/>
                <Route path="/category_5" component={CategoryFive}/>
            </Switch>
        </div>
    );
}

