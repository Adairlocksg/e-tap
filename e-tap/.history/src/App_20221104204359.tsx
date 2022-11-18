import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./input.css";
import Router from "./Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";

import { themeChange } from "theme-change";
import { useEffect, useState } from "react";
import TopBar from "./components/TopBar";

export const queryClient = new QueryClient();

function App() {
  const [isloggedIn, setIsLoggedIn] = useState(false);

  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer eyJlbWFpbCI6ICJnZkBnbWFpbC5jb20iLCAicGFzc3dvcmQiOiAic2VuaGExMjMifQ==`;

  if (!isloggedIn)
    return (
      <div>
        LOGIN <button onClick={() => setIsLoggedIn(true)}>opa</button>
      </div>
    );

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <section className="flex bg-[#303030] h-screen">
            <Sidebar />
            <div className="w-full">
              <TopBar />
              <Router />
            </div>
          </section>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
