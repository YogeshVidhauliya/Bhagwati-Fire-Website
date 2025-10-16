import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "Yogesh#@1234") {
      localStorage.setItem("isAdminLoggedIn", "true"); // save login state
      navigate("/enquiries-dashboard");
    } else {
      alert("Wrong password! Try again.");
    }
  };

  return (
    <div className="page" style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Admin Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "10px", width: "200px", marginBottom: "10px" }}
        />
        <br />
        <button type="submit" style={{ padding: "10px 20px" }}>Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;
