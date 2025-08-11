import { useState } from "react";
import supabase from "../../lib/supabase";
import createToken from "../../utils/token";

function Login() {
  const [username, setUsername] = useState<string>("");
  const JWTSecret = "IWillEditThisLater"
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data,error } = await supabase.from("chat_users").select("*").eq("username",username).single();
    if (error) {
      console.error("Error: " , error);
    } else {
      console.log("data:" , data);
      const token = await createToken(username,JWTSecret);
      console.log("token:", token)
      setUsername("");
    }
  };
  return (
    <>
      <form onSubmit={handleLogin}>
        <input
          placeholder="Enter Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button>Login</button>
      </form>
    </>
  );
}

export default Login;
