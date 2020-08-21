import React, { Fragment } from "react";
import { Link } from "react-router-dom";

//Component
import UserItem from "./UserItem/userItem";

const UsersList = ({ UsersList, onDeleteItem, onEditUser }) => {
  const item = UsersList.map((item) => {
    // console.log("Item => ", item);
    return (
      <UserItem
        key={item.id}
        id={item.id}
        name={item.name}
        email={item.email}
        message={item.message}
        created_at={item.created_at}
        onDeleteItem={() => onDeleteItem(item.id)}
        onEditUser={() => onEditUser(item.id)}
      />
    );
  });
  return (
    <Fragment>
      <div className="outer-container">
        <h1>User Manager Table</h1>
        <button className="nav-item btn btn-warning">
          <Link className="nav-link" to="/AddUser">
            Add User
          </Link>
        </button>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          {item}
        </table>
      </div>
    </Fragment>
  );
};
export default UsersList;
