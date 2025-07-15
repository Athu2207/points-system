import React, { useEffect, useState } from 'react';
import UserSelector from './components/UserSelector';
import ClaimButton from './components/ClaimButton';
import Leaderboard from './components/Leaderboard';
import AddUserForm from './components/AddUserForm';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [leaderboard, setLeaderboard] = useState([]);

  const fetchUsers = async () => {
    const res = await fetch('https://points-system-3tj2.onrender.com/api/users');
    const data = await res.json();
    setUsers(data);
  };

  const fetchLeaderboard = async () => {
    const res = await fetch('https://points-system-3tj2.onrender.com/api/claim/leaderboard');
    const data = await res.json();
    setLeaderboard(data);
  };

  useEffect(() => {
    fetchUsers();
    fetchLeaderboard();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Point Claim System</h2>
      <UserSelector users={users} selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
      <ClaimButton selectedUser={selectedUser} fetchLeaderboard={fetchLeaderboard} />
      <AddUserForm fetchUsers={fetchUsers} />
      <Leaderboard data={leaderboard} />
    </div>
  );
}

export default App;
