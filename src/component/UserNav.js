import React from "react";
import { useEffect } from "react";
import { Link, BrowserRouter, useNavigate, Outlet } from "react-router-dom";
function UserNav() {
  return (
    <div>
      <header>אוקטבה - בית הספר לנגינה ושירה</header>
      <nav>
        <Link to={"/homePage/about/"}>אודותינו</Link>
        <Link to={"/homePage/contactUs/"}>צור קשר</Link>
        <Link to={"/homePage/logInRegister/"}>הרשמה וכניסה</Link>
        <Link to={"/homePage/concerts/"}>הופעות</Link>
      </nav>

      <Outlet></Outlet>
    </div>
  );
}
export default UserNav;
