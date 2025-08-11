import { useState } from "react";
import supabase from "../../lib/supabase";

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
      <form onSubmit={handleRegister}>
        <input
          placeholder="Enter Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button>sign up</button>
      </form>
    </>
  );
}

export default SignUp;
