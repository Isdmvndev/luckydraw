import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Turn from "./pages/Turn/turn";
import { LuckyDraw } from "./pages/LuckyDraw/luckydraw";
import LayoutItem from "./components/LayoutItem";
import PrizeList from "./pages/Prizes/prizeList";
import CreatePrize from "./pages/Prizes/createPrize";
import CreateTurn from "./pages/Turn/createTurn";
import EmployeeList from "./pages/Employee/employeeList";
import CategoryList from "./pages/Category/categoryList";

const NotFound = lazy(() =>
  import("./pages").then((module) => ({ default: module.NotFound })),
);
export const routers = createBrowserRouter([
  {
    path: "/",
    element: <LayoutItem />,
    children: [
      {
        path: "luckydraw",
        element: <LuckyDraw />,
      },
      {
        path: "prizes",
        element: (
          <Suspense>
            <PrizeList />
          </Suspense>
        ),
          
      },
      {
        path: "prizes/create",
        element: <CreatePrize />,
      },
    ],
  },

  {
    path: "/turn",
    element: <LayoutItem />,
    children: [
      {
        path: "list",
        element: <Turn />,
      },
      {
        path: "create",
        element: <CreateTurn />,
      },
    ],
  },
  {
    path: "/employee",
    element: <LayoutItem />,
    children: [
      {
        path: "list",
        element: <EmployeeList />,
      },
     
    ],
  },
  {
    path: "/category",
    element: <LayoutItem />,
    children: [
      {
        path: "list",
        element: <CategoryList />,
      },
     
    ],
  },
  {
    path: "/luckydraw",
    element: (
      <Suspense>
        <LuckyDraw />
      </Suspense>
    ),
    children: [],
  },
]);
