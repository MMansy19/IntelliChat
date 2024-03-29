import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";
// import { useAuth } from "./context/AuthContext";

function App() {
  // const auth = useAuth();
  // console.log(auth?.user);
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
<<<<<<< Updated upstream
        <Route path="/chat" element={<Chat />} />
=======
        {/* {auth?.isLoggedIn && auth.user && ( */}
        <Route path="/chat" element={<Chat />} />
        {/* )} */}
>>>>>>> Stashed changes
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
