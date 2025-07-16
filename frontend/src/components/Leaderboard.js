import '../styles/Leaderboard.css';

export default function Leaderboard({ data }) {
  if (!data || data.length === 0) return <p>No leaderboard data yet.</p>;

  return (
    <div style={{ marginTop: 20 }}>
      <h3>📊 Leaderboard</h3>
      <ol>
        {data.map((user, index) => (
          <li key={user._id}>
            {index + 1}. {user.name} — {user.points} pts
          </li>
        ))}
      </ol>
    </div>
  );
}
