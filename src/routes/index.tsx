import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import articleAdminConfig from "./route/articleAdmin";
import newArticleConfig from './route/newArticle';
import fatherAConfig from './route/fatherA';
import fatherBConfig from './route/fatherB';
import { Config } from './types';

const configModuleArray = [
  articleAdminConfig,
  newArticleConfig,
  fatherAConfig,
  fatherBConfig
];

const generateRoutes = (configModuleArray: any) => {
  const configArray = new Array(0).concat(...configModuleArray);
  const routeArray = configArray.map((item) => (
    <Route path={item.path} exact={item.exact}>
      {item.component}
    </Route>
  ));
  return (<Switch>{routeArray}</Switch>);
};

export default generateRoutes(configModuleArray);
