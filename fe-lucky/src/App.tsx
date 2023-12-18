import { useState } from "react";
import { Loader } from "./common";
import { pause } from "./utils/utils";
import "./App.css";
import { Outlet, RouterProvider } from "react-router-dom";
import { routers } from "./routes";
import MenuItem from "./components/MenuItem";
import LayoutItem from "./components/LayoutItem";
import { ToastContainer, Slide } from "react-toastify";
import { CounterProvider } from "./context/ConfettiContext";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  pause(1000).then(() => {
    setIsLoading(false);
  });
  if (isLoading) return <Loader />;
  return (
    <>
      <CounterProvider>
        <RouterProvider router={routers} />
        <ToastContainer autoClose={1000} transition={Slide} />

        {/* <MenuItem/> */}
      </CounterProvider>
    </>
  );
}

export default App;
