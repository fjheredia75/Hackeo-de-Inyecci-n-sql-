import React, { useState } from "react";
import { login } from "../services/api";
import LoginResult from "./LoginResult";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    const response = await login(username, password);
    setLoading(false);
    setResult(response);
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
      {result && <LoginResult result={result} />}
    </div>
  );
};

export default LoginForm;