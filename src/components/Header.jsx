export const Header = ({ handleLogout }) => {
  return (
    <div className="header">
      <h1>Students</h1>
      <button className="logout-btn" onClick={() => handleLogout()}>
        Sign Out
      </button>
    </div>
  );
};
