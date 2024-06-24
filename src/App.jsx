import { Route, Routes } from "react-router-dom";
import Home from "./layouts/Home";
import Room from "./pages/Room";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<NotFound />} />
        <Route path="/:id" element={<Room />} />
      </Route>
    </Routes>
  );
}

export default App;
