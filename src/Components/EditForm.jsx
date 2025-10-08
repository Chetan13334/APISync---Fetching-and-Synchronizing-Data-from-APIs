import React from "react";
import "./User.css";

const EditForm = ({ formData, handleChange, handleSave, handleCancel, userId }) => {
  return (
    <div className="edit-form">
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" />

      <div className="form-buttons mt-2">
        <button className="btn btn-primary btn-sm me-2" onClick={() => handleSave(userId)}>Save</button>
        <button className="btn btn-secondary btn-sm" onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default EditForm;
