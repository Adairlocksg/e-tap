import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./index.css";
import Router from "./Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import TopBar from "./components/TopBar";

export const queryClient = new QueryClient();

function App() {
  const token = `Bearer eyJlbWFpbCI6ICJnZkBnbWFpbC5jb20iLCAicGFzc3dvcmQiOiAic2VuaGExMjMifQ==`;
  axios.defaults.headers.common["Authorization"] = token;

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <section className="flex  h-screen">
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
