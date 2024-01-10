import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LogInRegister() {
  const Login = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
  };

  const handleClickLogin = () => {
    if (id == "" || password == "") {
      setError("חובה למלא את השדות");
      //return;
    } else {
      setError("");
      // alert("click login");
      navigate("/homePage");
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
    <div>
      <h3>כניסת מורה</h3>
      <label id="taecherId">הכנס מספר ת"ז</label>
      <input
        type="text"
        placeholder="הכנס מספר תעודת זהות"
        onChange={handleChangeId}
        name="id"
      />
      <br />
      <label id="password">הכנס סיסמה </label>
      <input
        type="text"
        placeholder="הכנס סיסמה"
        onChange={handleChangePassword}
        name="password"
      />
      <br />
      <span>{error}</span>
      <button onClick={handleClickLogin}>login</button>
    </div>
  );
}
export default LogInRegister;
