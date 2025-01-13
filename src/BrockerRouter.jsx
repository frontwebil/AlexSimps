import { createBrowserRouter } from "react-router-dom";
import { BrockerPage } from "./components/BrockerPage/BrockerPage";
import { Customers } from "./components/BrockerPage/Customers/Customers";
import { SettingsBrocker } from "./components/BrockerPage/Settings/SettingsBrocker";

export const createBrockerRouter = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <BrockerPage />,
      children: [
        {
          index: true,
          element: <Customers />,
        },
        {
          path: "/customers",
          element: <Customers />,
        },
        {
          path: "/settings",
          element: <SettingsBrocker />,
        },
      ],
    },
  ]);
};
