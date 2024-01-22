import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../utils/UserUtil";
import { useDispatch, useSelector } from "react-redux";
import { setLoggedUser } from "../features/userSlice";
import { useEffect } from "react";
import { userSlice } from "../features/userSlice";

function LogInRegister() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //const loggedUser = useSelector(state=>state.user.setLoggedUser)

  // useEffect(() => {
  //   setPassword("");
  //   setId("");
  // }, [error]);

  const handleClickLoginManager = async () => {
    if (id == "" || password == "") {
      setError("חובה למלא את השדות");
      //dispatch(setLoggedUser(""));
    }
    try {
      const res = await login(id, password);
      if (res) {
        console.log(res);
        // dispatch(setLoggedUser(res));
        navigate("homePageManager");
      } else {
        setError("אחד הפרטים שגויים");
        // dispatch(setLoggedUser(""));
      }
    } catch (error) {
      setError(error.message);
      // dispatch(setLoggedUser(""));
      console.log(error.message);
    }
  };

  const handleClickLoginTeacher = async () => {
    if (id === "" || password === "") {
      setError("חובה למלא את השדות");
      // dispatch(setLoggedUser(""));
    }
    try {
      const res = await login(id, password);
      if (res) {
        console.log(res);
        // dispatch(setLoggedUser(res));
        navigate("homePageManager");
      } else {
        setError("אחד הפרטים שגויים");
      }
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  const handleChangeId = (event) => {
    setError("");
    let value = event.target.value;
    setId(value);
  };

  const handleChangePassword = (event) => {
    setError("");
    let value = event.target.value;
    setPassword(value);
  };

  return (
    <>
      <form>
        <h3>כניסת מנהל</h3>
        <label htmlFor="teacherId">הכנס מספר ת"ז</label>
        <input
          type="text"
          value={id}
          //placeholder="תעודת זהות"
          onChange={handleChangeId}
          name="id"
        />
        <br />
        {error}

        <label htmlFor="password">הכנס סיסמה</label>
        <input
          type="password"
          placeholder="סיסמה"
          onChange={handleChangePassword}
          name="password"
          value={password}
        />
        <br />

        <button onClick={handleClickLoginManager}>התחבר</button>

        <h3>כניסת מורה</h3>
        <label htmlFor="teacherId">הכנס מספר ת"ז</label>
        <input
          type="text"
          placeholder="תעודת זהות"
          onChange={handleChangeId}
          name="id"
          value={id}
        />
        <br />
        <label htmlFor="password">הכנס סיסמה</label>
        <input
          type="password"
          placeholder="סיסמה"
          onChange={handleChangePassword}
          name="password"
          value={password}
        />
        <br />
        <button onClick={handleClickLoginTeacher}>התחבר</button>
      </form>
    </>
  );
}

export default LogInRegister;
