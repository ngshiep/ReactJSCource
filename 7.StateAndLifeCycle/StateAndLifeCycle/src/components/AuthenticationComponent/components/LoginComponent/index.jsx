
// eslint-disable-next-line react/prop-types
export default function LoginComponent({ handleLogIn }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <h1>Please Log in</h1>
        <button onClick={handleLogIn}>Log in</button>
      </div>
    </div>
  );
}
