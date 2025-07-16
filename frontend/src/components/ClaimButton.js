import '../styles/ClaimButton.css';
export default function ClaimButton({ selectedUser, fetchLeaderboard }) {
  const handleClaim = async () => {
    if (!selectedUser) return alert("Please select a user first.");

    const res = await fetch(`https://points-system-backend-e5n8.onrender.com/api/claim/${selectedUser}`, {
      method: 'POST',
    });

    const data = await res.json();
    alert(`${data.user.name} claimed ${data.points} points!`);

    fetchLeaderboard();
  };

  return <button onClick={handleClaim}>🎯 Claim Points</button>;
}
