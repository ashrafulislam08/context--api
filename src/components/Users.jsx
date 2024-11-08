import User from "./User";

const Users = ({ users, handleDeleteUser }) => {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gap: "15px",
      }}
    >
      {users.map((user) => (
        <User key={user.id} user={user} handleDeleteUser={handleDeleteUser} />
      ))}
    </section>
  );
};

export default Users;
