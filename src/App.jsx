import { useState } from "react";
import Users from "./components/Users";
import NewUser from "./components/NewUser";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "Ashraful",
    },
    {
      id: 2,
      username: "Siam",
    },
  ]);

  const handleDeleteUser = (id) => {
    const filteredUsers = users.filter((user) => user.id != id);
    setUsers(filteredUsers);
  };

  const handleAddNewUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  return (
    <>
      <NewUser handleAddNewUser={handleAddNewUser} />
      <div>
        <h2>App</h2>
        <Users users={users} handleDeleteUser={handleDeleteUser} />
      </div>
    </>
  );
}

export default App;
// CRD - Create, Read and Delete
