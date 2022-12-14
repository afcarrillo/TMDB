import React from "react";

import "../index.css";

const UserListItem = ({ user, index }) => {
  return (
    <tr>
      <th>{index + 1}</th>

      <td>{user.nickname}</td>

      <td>{user.name}</td>

      <td>{user.lastname}</td>

      <td>
        <button className="button is-info is-small" disabled>
          <span className="icon is-small">
            <i className="fas fa-user"></i>
          </span>
          <span>Friend request</span>
        </button>
      </td>
    </tr>
  );
};

export default UserListItem;
