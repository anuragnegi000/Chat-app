import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../Context/AuthContext";

const useSignin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signin = async ({ username, password }) => {
    const success = handleInputErrors({
      username,
      password,
    });
    if (!success) {
      return false;
    }
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      toast.success("Signin successful!");
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (e) {
      toast.error(e.message);
    } finally {
      setLoading(false);
    }
  };
  return { signin, loading };
};

export default useSignin;


const handleInputErrors=({username,password})=>{
  if (!username || !password) {
    toast.error("Please fill all the fields");
    return false;
  }
  return true;
}