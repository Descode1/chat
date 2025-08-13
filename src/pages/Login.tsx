import { useState } from "react";
import supabase from "../../lib/supabase";
import createToken from "../../utils/token";
import { useNavigate } from "react-router";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState<string>("");
  const JWTSecret = "IWillEditThisLater";
  const navigate = useNavigate();
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase
      .from("chat_users")
      .select("*")
      .eq("username", username)
      .single();

    if (error) {
      console.error("Error: ", error);
    } else {
      const token = await createToken(username, JWTSecret);
      localStorage.setItem("tkn", token);
      localStorage.setItem("username", username);
      setUsername("");
      navigate("/global-chat");
    }
  };

  return (
    <>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          className="login-input"
          placeholder="Enter Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className="login-button">Login</button>
        <h4>{`Don't have a username yet? `}<a href="signup">Register</a></h4>
      </form>
    </>
  );
}

export default Login;
