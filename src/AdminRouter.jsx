import { createBrowserRouter } from "react-router-dom";
import { Reports } from "./components/AdminPage/Reports/Reports.jsx";
import { Settings } from "./components/AdminPage/Settings/Settings.jsx";
import { AdminPage } from "./components/AdminPage/AdminPage.jsx";
import { Business } from "./components/AdminPage/Business/Business.jsx";
import { Agents } from "./components/AdminPage/Agents/Agents.jsx";
import { Customers } from "./components/AdminPage/Customers/Customers.jsx";
import { AgentInfo } from "./components/AdminPage/Agents/AgentInfo/AgentInfo.jsx";
import { CustomerDetails } from "./components/AdminPage/Customers/СustomerInfo/СustomerDetails.jsx.jsx";
import { BusinessCustomersInfo } from "./components/AdminPage/Business/BusinessCustomers/BusinessCustomersInfo.jsx";
import { AddCustomer } from "./components/AdminPage/AddCustomer/AddCustomer.jsx";

export const createAdminRouter = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <AdminPage />,
      children: [
        {
          index: true,
          element: <Business />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
        {
          path: "addCustomer",
          element: <AddCustomer />,
        },
        {
          path: "reports",
          element: <Reports />,
        },
        {
          path: "business",
          element: <Business />,
        },
        {
          path: "agents",
          element: <Agents />,
        },
        {
          path: "customers",
          element: <Customers />,
        },
        {
          path: "agents/:id",
          element: <AgentInfo />,
        },
        {
          path: "customers/:id",
          element: <CustomerDetails/>
        },
        {
          path: 'business/:id',
          element: <BusinessCustomersInfo/>
        }
      ],
    },
  ]);
};
