import { useState } from "react";

const NewUser = ({ handleAddNewUser }) => {
  const [username, setUsername] = useState("");
  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { id: new Date().getTime().toString(), username: username };
    handleAddNewUser(newUser);
    setUsername("");
  };
  return (
    <div>
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChangeUsername}
          required
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default NewUser;
