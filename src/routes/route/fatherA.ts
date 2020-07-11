import { FatherA } from "@const/index";
import { SonA1, SonA2 } from "@modules/fatherA";
import { IRoute } from "../types";

const routeConfig:IRoute[] = [
  {
    path: FatherA.SonA1,
    component: SonA1
  },
  {
    path: FatherA.SonA2,
    component: SonA2
  }
];

export default routeConfig;
