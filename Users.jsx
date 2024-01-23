import React, { useEffect, useState } from "react";
import { getUsers } from "../utils/UserUtil";

const Users = () => {
  const [users, setUsers] = useState([]);

  //פונקציה שמופעלת בפעם הראשונה שהקומפוננטה נטענת
  useEffect(() => {
    getUsers().then((res) => {
      console.log(res);
      setUsers(res);
      console.log(users);
    }, []);
    console.log("load users");
  }, []);

  return (
    <div>
      {users?.map((user) => {
        return (
          <span key={user.id}>
            {user.firstName} {user.lastName}
            <br />
          </span>
        );
      })}
    </div>
  );
};
export default Users;
