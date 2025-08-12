import { useState } from "react";
import supabase from "../../lib/supabase";
import "./Login.css"

function SignUp() {
  const [username, setUsername] = useState<string>("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.from("chat_users").insert([{ username }]);
    if (error) {
      console.error("Error: " + error);
    } else {
      console.log("Insert successfully");
      setUsername("");
    }
  };
  return (
    <>
      <form className="login-form" onSubmit={handleRegister}>
        <input
          className="login-input"
          placeholder="Enter Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className="login-button">Register</button>
        <h4>Already registered? <a href="/login">Login</a> </h4>
      </form>
    </>
  );
}

export default SignUp;
