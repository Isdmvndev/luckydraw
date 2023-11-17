import { useState } from "react";
import { Loader } from "./common";
import { pause } from "./utils/utils";
import "./App.css";
import { RouterProvider } from 'react-router-dom'
import { routers } from './routes'
import { LuckyDraw } from "./pages/LuckyDraw/luckydraw";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  pause(1000).then(() => {
    setIsLoading(false);
  });
  if (isLoading) return <Loader />;
  return (
    <> 
        <LuckyDraw/>
        <RouterProvider router={routers} />
    </>
  );
}

export default App;
