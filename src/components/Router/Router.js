import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {PageAvaliableUser} from "../PageAvaliableUser/PageAvaliableUser";
import {PageFilter} from '../PageFilter/PageFilter'
import {PageResultFilter} from '../PageFilter/PageResultFilter/PageResultFilter'
import {ProfileEnterprise} from '../PageProfileEnterprise/ProfileEnterprise'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/business">
          <ProfileEnterprise />
        </Route>

        <Route exact path="/feedback">
          <PageAvaliableUser />
        </Route>

        <Route exact path="/search">
          <PageFilter />
        </Route>

        <Route exact path="/search/result">
        <PageResultFilter />
        </Route>


        <Route exact path="/">
          <ProfileEnterprise />
        </Route>

        <Route>
          <div>Eita Giovanna, o forninho caiu (404)</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
