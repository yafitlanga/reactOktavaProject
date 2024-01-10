import React, { useEffect, useState } from "react";
import { getUsers } from "../utils/UserUtil";
import { getUserById } from "../utils/UserUtil";

const Users = () => {
  const [users, setUsers] = useState([]);
  //פונקציה שמופעלת בפעם הראשונה שהקומפוננטה נטענת
  useEffect(() => {
    getUsers().then((res) => {
      console.log(res);
      setUsers(res.data);
    });
    console.log("load users");
  }, []);

  return (
    <div>
      {Users.map((user, index) => {
        <span>{user.index}</span>;
      })}
    </div>
  );
};
export default Users;
