
import { Suspense, lazy } from "react";
import {
  createBrowserRouter,
} from "react-router-dom";

const NotFound = lazy(() => import('./pages').then((module) => ({ default: module.NotFound })))
export const routers = createBrowserRouter([
   
  {
    path: "/",
    element: <></>,
    children: [
      {
        path: "team",
        element:  <>4433</>,
      },
    ],
  },
  {
    path: "/test",
    element: 1111,
    children: [
        {
          path: "team",
          element:  4433,
        },
      ],
  },
]);
