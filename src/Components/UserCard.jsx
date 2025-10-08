import React from "react";
import "./User.css";

const UserCard = ({ user, handleEditClick, handleShowInfo }) => {
  return (
    <div className="card">
      <div className="card-details">
        <p className="text-title">{user.name}</p>
        <p className="text-body">
          <b>Username:</b> {user.username} <br />
          <b>Email:</b> {user.email} <br />
          <b>City:</b> {user.address.city}
        </p>
        <button className="editform" onClick={() => handleEditClick(user)}>
          Edit
        </button>
      </div>
      <button className="card-button mt-2" onClick={() => handleShowInfo(user.id)}>
        Show Info
      </button>
    </div>
  );
};

export default UserCard;
