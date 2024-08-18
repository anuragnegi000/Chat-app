import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../Context/AuthContext";

const useSignin = () => {
    const [loading,setLoading]=useState(false);
    const { setAuthUser } = useAuthContext();
    const signin=async ({username,password})=>{
        setLoading(true);
        try{
            const response=await fetch("/api/auth/signin",{
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({
                    username,
                    password,
                }),
            })
            const data=await response.json();
            if(data.error){
                throw new Error(data.error);
            }
            localStorage.setItem("chat-user",JSON.stringify(data));
            setAuthUser(data);
        }
        catch(e){
            toast.error(e.message);
        }
        finally{
            setLoading(false);
        }
    }
    return{
        signin,
        loading,
    }
}
export default useSignin;