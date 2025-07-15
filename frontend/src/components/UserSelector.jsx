function UserSelector({ users, selectedUser, setSelectedUser }) {
  return (
    <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
      <option value="">Select a user</option>
      {users.map(user => (
        <option key={user._id} value={user._id}>{user.name}</option>
      ))}
    </select>
  );
}

export default UserSelector;
