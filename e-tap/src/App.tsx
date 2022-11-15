import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./input.css";
import Router from "./Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import Login from "./pages/Login";

export const queryClient = new QueryClient();

function App() {
  const [authToken, setAuthToken] = useState(
    localStorage.getItem("@authToken")
  );

  axios.defaults.headers.common["Authorization"] = authToken;

  if (!authToken?.length) {
    return (
      <QueryClientProvider client={queryClient}>
        <Login setAuthToken={setAuthToken} />
      </QueryClientProvider>
    );
  }

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <section className="flex bg-[#303030]">
            <Sidebar setAuthToken={setAuthToken} />
            <Router />
          </section>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
