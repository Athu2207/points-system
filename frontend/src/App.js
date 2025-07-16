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
    try {
      const res = await fetch('https://points-system-backend-e5n8.onrender.com/api/users');
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error('❌ fetchUsers failed:', err);
      alert('Failed to fetch users.');
    }
  };

  const fetchLeaderboard = async () => {
    try {
      const res = await fetch('https://points-system-backend-e5n8.onrender.com/api/claim/leaderboard');
      const data = await res.json();
      setLeaderboard(data);
    } catch (err) {
      console.error('❌ fetchLeaderboard failed:', err);
      alert('Failed to fetch leaderboard.');
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchLeaderboard();
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h2>🏆 Point Claim Leaderboard</h2>
      <UserSelector users={users} selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
      <ClaimButton selectedUser={selectedUser} fetchLeaderboard={fetchLeaderboard} />
      <AddUserForm fetchUsers={fetchUsers} />
      <Leaderboard data={leaderboard} />
    </div>
  );
}

export default App;
