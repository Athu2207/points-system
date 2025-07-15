import { useState } from 'react';

function AddUserForm({ fetchUsers }) {
  const [name, setName] = useState('');

  const handleAdd = async () => {
    if (!name.trim()) return;
    await fetch('https://points-system-3tj2.onrender.com/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    });
    setName('');
    fetchUsers();
  };

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="New user name" />
      <button onClick={handleAdd}>Add User</button>
    </div>
  );
}

export default AddUserForm;
