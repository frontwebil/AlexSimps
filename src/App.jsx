import { useState, useEffect } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import { createAdminRouter } from "./AdminRouter";
import { LoginPage } from "./LoginPage";
import { UserContext } from "./UserContext";
import { createBrockerRouter } from "./BrockerRouter";
import Cookies from "js-cookie";

const ProtectedRoute = ({ children, user }) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleSetUser = (userData) => {
    if (userData) {
      Cookies.set("user", JSON.stringify(userData), { expires: 14 });
    } else {
      Cookies.remove("user");
    }
    setCurrentUser(userData);
  };

  useEffect(() => {
    const loadUserFromCookies = () => {
      const userCookie = Cookies.get("user");
      if (userCookie) {
        try {
          const userData = JSON.parse(userCookie);
          setCurrentUser(userData);
        } catch (error) {
          console.error("Failed to parse user cookie:", error);
          Cookies.remove("user");
        }
      }
      setIsLoading(false);
    };

    loadUserFromCookies();
  }, []);
  const publicRouter = createBrowserRouter([
    {
      path: "/login",
      element: <LoginPage setCurrentUser={handleSetUser} />,
    },
    {
      path: "*",
      element: <Navigate to="/login" replace />,
    },
  ]);

  if (!currentUser) {
    return <RouterProvider router={publicRouter} />;
  }

  let router;
  if (currentUser.role === "admin") {
    router = createAdminRouter();
  } else if (currentUser.role === "agent") {
    router = createBrockerRouter();
  } else {
    return <RouterProvider router={publicRouter} />;
  }

  return (
    <UserContext.Provider
      value={{ currentUser, setCurrentUser: handleSetUser }}
    >
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}
