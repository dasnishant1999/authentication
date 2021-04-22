import React from "react";
import { useAuth } from "./AuthContext";
import { useHistory } from "react-router-dom";

function Dashboard() {
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function logoutHandler() {
    try {
      await logout();
      history.push("/signin");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {currentUser && currentUser.email}
      <button className="log-out" onClick={logoutHandler}>
        Log out
      </button>
    </div>
  );
}

export default Dashboard;
