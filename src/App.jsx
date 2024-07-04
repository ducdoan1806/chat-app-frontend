import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./layouts/Home";
import Room from "./pages/Room";
import NotFound from "./pages/NotFound";
import Auth from "./layouts/Auth";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      >
        <Route path="/" element={<NotFound />} />
        <Route path="/room" element={<NotFound />} />
        <Route path="/room/:id" element={<Room />} />
        <Route path="/new-message" element={<Room />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
      <Route path="/auth" element={<Auth />}>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth" element={<Navigate to={"/auth/login"} />} />
        <Route path="/auth/*" element={<Navigate to={"/auth/login"} />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
