import { set } from "mongoose";
import { useState } from "react";
import { useAuthContext } from "../Context/AuthContext";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const logout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.removeItem("chat-user");
      setAuthUser(null);
    } catch (e) {
      console.log(e);
      return false;
    }
    finally {
      setLoading(false);
    }
  };
  return { logout, loading };
};

export default useLogout;