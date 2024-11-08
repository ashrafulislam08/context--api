import React from "react";

const User = ({ user, handleDeleteUser }) => {
  return (
    <article
      style={{
        backgroundColor: "antiquewhite",
        padding: "0.5rem",
      }}
    >
      <p>User Id: {user.id}</p>
      <h4>Name: {user.username}</h4>
      <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
    </article>
  );
};

export default User;
