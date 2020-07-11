import { ArticleAdmin } from "@const/index";
import AdminPage from "@modules/articleAdmin";
import { IRoute } from "../types";

const routeConfig:IRoute[] = [
  {
    path: ArticleAdmin.Index,
    component: AdminPage,
    exact: true,
  },
];

export default routeConfig;
