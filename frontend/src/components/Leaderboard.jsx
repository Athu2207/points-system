function Leaderboard({ data }) {
  return (
    <div>
      <h3>Leaderboard</h3>
      <ol>
        {data.map(user => (
          <li key={user._id}>
            {user.name} - {user.totalPoints} pts (Rank #{user.rank})
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Leaderboard;
