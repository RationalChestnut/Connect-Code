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
import { Chats } from "./pages/Chats/Chats";
import { HackathonLandingPage } from "./pages/HackathonLandingPage/HackathonLandingPage";
import { Protected } from "./pages/ProtectedRoute/Protected";
function App() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUserId(currentUser.uid);
        localStorage.setItem("user", true);
      } else {
        localStorage.removeItem("user", false);
      }
    });
  }, []);

  return (
    <Router>
      <nav>
        <Navbar isLoggedIn={userId != null ? true : false} userId={userId} />
      </nav>
      <Routes>
        <Route path="/" element={<Home userId={userId} />} />
        <Route path="/find-others" element={<FindOthers userId={userId} />} />
        <Route path="/hackathons" element={<Hackathons />} />
        <Route
          path="/hackathons/:id"
          element={
            <Protected userId={userId}>
              <HackathonLandingPage userId={userId} />
            </Protected>
          }
        />
        <Route
          path="/profile/:id"
          element={
            <Protected userId={userId}>
              <Profile userId={userId} />
            </Protected>
          }
        />
        <Route
          path="/edit-profile"
          element={
            <Protected userId={userId}>
              <EditProfile userId={userId} />
            </Protected>
          }
        />
        <Route
          path="/chats"
          element={
            <Protected userId={userId}>
              <Chats userId={userId} />
            </Protected>
          }
        />
        <Route path="/signup" element={<Signup setUserId={setUserId} />} />
        <Route path="/login" element={<Login setUserId={setUserId} />} />
        <Route path="/user/logout" element={<Logout setUserId={setUserId} />} />
      </Routes>
    </Router>
  );
}

export default App;
