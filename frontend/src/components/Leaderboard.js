import '../styles/Leaderboard.css';

export default function Leaderboard({ data }) {
  if (!data || data.length === 0) return <p className="no-data">No leaderboard data yet.</p>;

  return (
    <div className="leaderboard-container">
      <h3>📊 Leaderboard</h3>
      <ol className="leaderboard-list">
        {data.map((user, index) => (
          <li key={user._id}>
            <span className="rank">{index + 1}.</span>{' '}
            <span className="name">{user.name}</span>{' '}
            <span className="points">— {user.points} pts</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
