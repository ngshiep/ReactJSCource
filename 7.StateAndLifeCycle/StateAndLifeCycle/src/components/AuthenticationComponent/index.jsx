import { useState } from "react";
import LogoutComponent from "./components/LogoutComponent";
import LoginComponent from "./components/LoginComponent";

export default function AuthenticationComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogIn = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <>
      {isLoggedIn && (
        <LogoutComponent handleLogout={handleLogout}></LogoutComponent>
      )}
      {!isLoggedIn && (
        <LoginComponent handleLogIn={handleLogIn}></LoginComponent>
      )}
    </>
  );
}
