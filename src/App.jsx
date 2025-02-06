import { useState } from "react";
// import Navbar from "./Components/NavbarPage/Navbar";
import Home from "./Components/HomePage/Home";
import HomeBoxes from "./Components/HomeBoxes/HomeBoxes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Navbar /> */}
      <Home/>
      <HomeBoxes/>
    </>
  );
}

export default App;
