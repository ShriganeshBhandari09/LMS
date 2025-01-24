import { Route, Routes } from "react-router-dom";
import Navbar from "./student/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="text-default min-h-screen bg-white ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
