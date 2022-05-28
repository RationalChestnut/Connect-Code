import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import Home from "./pages/HomePage/Home.js";
import { Signup } from "./pages/UserAuth/Signup/Signup";
import { Login } from "./pages/UserAuth/Login/Login";
import { FindOthers } from "./pages/FindOthers/FindOthers";
import Hackathons from "./pages/Hackathons/Hackathons";
import { Profile } from "./pages/Settings/Profile/MainProfile/Profile";
import { EditProfile } from "./pages/Settings/Profile/EditProfile/EditProfile";
import { useEffect, useState } from "react";
import { auth } from "./firebase-config";
import { Logout } from "./pages/UserAuth/Logout/Logout";

function App() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUserId(currentUser.uid);
      }
    });
  }, []);

  return (
    <Router>
      <nav>
        <Navbar isLoggedIn={userId != null ? true : false} userId={userId} />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-others" element={<FindOthers />} />
        <Route path="/hackathons" element={<Hackathons />} />
        <Route path="/profile/:id" element={<Profile userId={userId} />} />
        <Route path="/edit-profile" element={<EditProfile userId={userId} />} />
        <Route path="/signup" element={<Signup setUserId={setUserId} />} />
        <Route path="/login" element={<Login setUserId={setUserId} />} />
        <Route path="/user/logout" element={<Logout setUserId={setUserId} />} />
      </Routes>
    </Router>
  );
}

export default App;
