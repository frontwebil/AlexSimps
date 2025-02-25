import { createBrowserRouter } from "react-router-dom";
import { ClientPage } from "./components/ClientPage/ClientPage.jsx";
import { WorkersPage } from "./components/ClientPage/WorkersPage/WorkersPage.jsx";
import { CustomerDetails } from "./components/ClientPage/WorkersPage/СustomerInfo/СustomerDetails.jsx.jsx";

export const createClientRouter = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <ClientPage />,
      children: [
        {
          index: true,
          element: <WorkersPage />,
        },
        {
          path: "/workers",
          element: <WorkersPage />,
        },
        {
          path: "workers/:id",
          element: <CustomerDetails />,
        },
      ],
    },
  ]);
};
