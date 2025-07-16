import './styles/UserSelector.css';

export default function UserSelector({ users, selectedUser, setSelectedUser }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <select value={selectedUser} onChange={e => setSelectedUser(e.target.value)}>
        <option value="">🔽 Select a user</option>
        {users.map(user => (
          <option key={user._id} value={user._id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
}
