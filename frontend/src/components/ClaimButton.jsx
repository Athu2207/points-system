function ClaimButton({ selectedUser, fetchLeaderboard }) {
  const handleClaim = async () => {
    if (!selectedUser) return alert("Select a user first");
    const res = await fetch(`http://localhost:5000/api/claim/${selectedUser}`, { method: 'POST' });
    const data = await res.json();
    alert(`${data.user.name} claimed ${data.points} points!`);
    fetchLeaderboard();
  };

  return <button onClick={handleClaim}>Claim Points</button>;
}

export default ClaimButton;
