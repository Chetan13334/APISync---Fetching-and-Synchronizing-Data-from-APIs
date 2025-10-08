import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import UserCard from "./UserCard";
import "./User.css";

const UserCards = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [modalUser, setModalUser] = useState(null); // modal state
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Check your internet!", err));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleShowInfo = (userId) => navigate(`/user/${userId}`);

  const handleEditClick = (user) => {
    setModalUser(user); // open modal
    setFormData({
      name: user.name,
      username: user.username,
      email: user.email,
      city: user.address.city,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === modalUser.id
          ? { ...user, ...formData, address: { ...user.address, city: formData.city } }
          : user
      )
    );
    setModalUser(null); // close modal
  };

  const handleCancel = () => setModalUser(null);

  return (
    <>
      <Navbar />
      <div className={`user-container ${modalUser ? "blurred" : ""}`}>
        <h2 className="user-title">APISync – Fetching and Synchronizing Data from APIs</h2>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <hr />
        <div className="user-grid">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                handleEditClick={handleEditClick}
                handleShowInfo={handleShowInfo}
              />
            ))
          ) : (
            <p className="no-results">No users found.</p>
          )}
        </div>
      </div>

      {/* ===== Modal ===== */}
      {modalUser && (
        <div className="modal-overlay">
          <div className="modal-content modal-large">
            <h3>Edit {modalUser.name}</h3>
            <label htmlFor="lableEdit">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
            />
            <label htmlFor="lableEdit">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
            />
            <label htmlFor="lableEdit">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <label htmlFor="lableEdit">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
            />
            <div className="modal-buttons">
              <button className="btn btn-primary" onClick={handleSave}>
                Save
              </button>
              <button className="btn btn-secondary" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserCards;
