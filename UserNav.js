import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, Outlet } from "react-router-dom";
import { setLoggedUser } from "../features/userSlice";

function UserNav() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClickLogOut = () => {
    navigate("/homePage");
    dispatch(setLoggedUser(null));
  };

  return (
    <div>
      <header>אוקטבה - בית הספר לנגינה ושירה</header>
      <nav>
        <button onClick={handleClickLogOut}>התנתקות</button><br></br>
        <Link to={"logInRegister"}>כניסת מנהל/מורה</Link>
        <Link to={"about"}>אודותינו</Link>
        <Link to={"contactUs"}>צור קשר</Link>
        <Link to={"concerts"}>הופעות</Link>
      </nav>

      <Outlet></Outlet>
    </div>
  );
}
export default UserNav;
