import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/HomePage/Home.js";
import { Signup } from "./pages/UserAuth/Signup/Signup";
import { Login } from "./pages/UserAuth/Login/Login";
import { FindOthers } from "./pages/FindOthers/FindOthers";
import Hackathons from "./pages/Hackathons/Hackathons";
import { Profile } from "./pages/Settings/Profile/MainProfile/Profile";
import { EditProfile } from "./pages/Settings/Profile/EditProfile/EditProfile";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("https://ConnectCodeBackend.yxli666.repl.co/checkAuthentication")
      .then((res) => {
        if (res.status === 200) {
          setUser(res.data.user);
        } else {
          setUser(null);
        }
      });
  }, []);

  return (
    <Router>
      <nav>
        <Navbar />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-others" element={<FindOthers />} />
        <Route path="/hackathons" element={<Hackathons />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/profile/edit-profile" element={<EditProfile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
      </Routes>
    </Router>
  );
}

export default App;
