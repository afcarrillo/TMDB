import axios from "axios";
import React, { useEffect, useState } from "react";

import UserListItem from "../commons/UserListItem";

const SearchUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/api/user")
      .then((res) => res.data)
      .then((usersFound) => setUsers(usersFound))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1 className="title is-size-3 my-6">Users</h1>
      {users.length ? (
        <table className="table is-hoverable is-striped is-info">
          <thead>
            <tr className="content has-text-centered">
              <th>Id</th>
              <th>User</th>
              <th>Name</th>
              <th>Lastname</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <UserListItem key={i} user={user} index={i} />
            ))}
          </tbody>
        </table>
      ) : (
        "Not users found"
      )}
    </div>
  );
};

export default SearchUsers;
