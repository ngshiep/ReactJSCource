// eslint-disable-next-line react/prop-types
export default function LogoutComponent({ handleLogout }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <h1>Welcome</h1>
        <button onClick={handleLogout}>Log out</button>
      </div>
    </div>
  );
}
