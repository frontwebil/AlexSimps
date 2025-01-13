import { useState, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { createAdminRouter } from "./AdminRouter";
import { LoginPage } from "./LoginPage";
import { UserContext } from "./UserContext";
import { createBrockerRouter } from "./BrockerRouter";
import Cookies from 'js-cookie';

export function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleSetUser = (userData) => {
    if (userData) {
      // Save to cookies with 7 days expiration
      Cookies.set('user', JSON.stringify(userData), { expires: 14 });
    } else {
      // Remove from cookies on logout
      Cookies.remove('user');
    }
    setCurrentUser(userData);
  };

  useEffect(() => {
    const loadUserFromCookies = () => {
      const userCookie = Cookies.get('user');
      if (userCookie) {
        try {
          const userData = JSON.parse(userCookie);
          setCurrentUser(userData);
        } catch (error) {
          console.error('Failed to parse user cookie:', error);
          Cookies.remove('user');
        }
      }
      setIsLoading(false);
    };

    loadUserFromCookies();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!currentUser) {
    return <LoginPage setCurrentUser={handleSetUser} />;
  }

  let router;
  if (currentUser.role === 'admin') {
    router = createAdminRouter();
  } else if (currentUser.role === 'agent') {
    router = createBrockerRouter();
  } else {
    return <LoginPage setCurrentUser={handleSetUser} />;
  }

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser: handleSetUser }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}