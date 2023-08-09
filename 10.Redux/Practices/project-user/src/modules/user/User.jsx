import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_USER, FETCH_USER } from "../../redux/action";

function User() {
  const users = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleGetUsers = () => {
    dispatch({ type: FETCH_USER, payload: {} });
  };
  const handleDelete = (userId) => {
    console.log("🚀 ~ file: User.jsx:12 ~ handleDelete ~ userId:", userId);
    dispatch({ type: DELETE_USER, payload: { userId } });
  };
  return (
    <div>
      <h1 className="text-red-400">User list</h1>
      <button className="py-2 px-1" onClick={handleGetUsers}>
        Get users
      </button>
      {users && users.length > 0 && (
        <table className="border-collapse border border-slate-400">
          <thead>
            <tr>
              <th className="border border-slate-300">Id</th>
              <th className="border border-slate-300">Name</th>
              <th className="border border-slate-300">Email</th>
              <th className="border border-slate-300">Website</th>
              <th className="border border-slate-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border border-slate-300">{user.id}</td>
                <td className="border border-slate-300">{user.username}</td>
                <td className="border border-slate-300">{user.email}</td>
                <td className="border border-slate-300">{user.website}</td>
                <td className="border border-slate-300">
                  <button
                    className="py-2 px-1"
                    onClick={(e) => handleDelete(user.id)}
                  >
                    Delete User
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
export default User;
