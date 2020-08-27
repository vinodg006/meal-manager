import React from "react";
import Loadable from "react-loadable";
import Loader from "./common/components/Loader";
import appRoutes from "./common/constants/appRoutes";

const MyLoadingComponent = () => {
  return <Loader />;
};

const LoadableComponent = (loader) =>
  Loadable({
    loader,
    loading: MyLoadingComponent,
  });

const routeConfig = [
  {
    path: appRoutes.ROOT,
    component: LoadableComponent(() =>
      import("./features/auth/LoginContainer")
    ),
    isExact: true,
  },
  {
    path: appRoutes.LOGIN,
    component: LoadableComponent(() =>
      import("./features/auth/LoginContainer")
    ),
    isExact: true,
  },
  {
    path: appRoutes.REGISTER,
    component: LoadableComponent(() =>
      import("./features/auth/RegisterContainer")
    ),
    isExact: true,
  },
];

export default routeConfig;
