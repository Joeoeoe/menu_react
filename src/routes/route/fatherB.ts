import { FatherB } from "@const/index";
import { SonB2, GrandSonB1, GrandSonB2 } from "@modules/fatherB";
import { IRoute } from "../types";

const routeConfig:IRoute[] = [
  {
    path: FatherB.SonB2,
    component: SonB2
  },
  {
    path: FatherB.GrandSonB1,
    component: GrandSonB1
  },
  {
    path: FatherB.GrandSonB2,
    component: GrandSonB2
  }
];

export default routeConfig;
