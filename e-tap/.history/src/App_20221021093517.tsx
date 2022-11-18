import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./input.css";
import Router from "./Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";

export const queryClient = new QueryClient();

function App() {
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer eyJlbWFpbCI6ICJnZkBnbWFpbC5jb20iLCAicGFzc3dvcmQiOiAic2VuaGExMjMifQ==`;

  return (
    <>
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
