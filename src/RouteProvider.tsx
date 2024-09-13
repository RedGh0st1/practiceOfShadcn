import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";

const RouteProvider: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Books" element={<Books />} />

      <Route path="*" element={<div> 404 Not Found!!!</div>} />
    </Routes>
  );
};
export default RouteProvider;
