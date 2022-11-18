import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./input.css";
import Router from "./Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";

import { themeChange } from "theme-change";
import { useEffect } from "react";

export const queryClient = new QueryClient();

function App() {
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer eyJlbWFpbCI6ICJnZkBnbWFpbC5jb20iLCAicGFzc3dvcmQiOiAic2VuaGExMjMifQ==`;

  useEffect(() => {
    themeChange(false);
  }, []);

  const theme = ["dark", "cupcake", "theme"];

  return (
    <>
      <select className="text-primary" data-chose-theme>
        {theme.map((value) => (
          <option key={value.toLowerCase()} value={value.toLowerCase()}>
            {value}
          </option>
        ))}
      </select>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <section className="flex bg-[#303030]">
            <Sidebar />
            <Router />
          </section>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
