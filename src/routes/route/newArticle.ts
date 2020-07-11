import { NewArticle } from "@const/index";
import NewArticlePage from '@modules/newArticle';
import { IRoute } from "../types";

const routeConfig:IRoute[] = [
  {
    path: NewArticle.Index,
    component: NewArticlePage,
    exact: true,
  },
];

export default routeConfig;
