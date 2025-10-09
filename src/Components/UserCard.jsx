  import React,{useContext} from "react";
 
  import "./User.css";
  import { ThemeContext } from "./ThemeContext";

  const UserCard = ({ user, handleEditClick, handleShowInfo }) => {
    const { darkMode, toggleTheme } = useContext(ThemeContext);
    return (<>
      {/* <div className="card">
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
      </div> */}
      {/* // <!-- From Uiverse.io by satyamchaudharydev -->  */}
<div class="card">
    <h3 class="card__title">{user.name}
    </h3>
  
    <div class="card__date">
      <label >Username:</label> {user.username}
      </div>
      <div class="card__date">
      <label >Email:</label> {user.email}
      </div>
      
      <button className="editform" onClick={() => handleEditClick(user)}>
            EDIT
          </button>
    <div class="card__arrow" onClick={() => handleShowInfo(user.id)}>
      
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
            <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
        </svg>
    </div>
    
</div>
</>
    );
  };

  export default UserCard;
