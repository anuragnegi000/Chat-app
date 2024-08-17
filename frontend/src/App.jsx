import Home from "./pages/home/Home";
import { Routes,Route, Navigate } from "react-router-dom";
import Signin from "./pages/signin/signin";
import Signup from "./pages/signup/signup";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./Context/AuthContext.jsx";

export default function App() {
  const {authUser} = useAuthContext();
  return (
    <div className="">
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to="/signin" />} />
        <Route path="/signin" element={authUser ? <Navigate to="/" /> : <Signin />} />
        <Route path="/signup" element={authUser ? <Navigate to="/" /> : <Signup />} />
      </Routes>
      <Toaster/>
    </div>
  );
}
