import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import Layout from "./components/partials/Layout";
import LoadingSkeleton from "./components/ui/LoadingSkeleton";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setIsLoading(false), 800);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        {isLoading ? (
          <LoadingSkeleton />
        ) : (
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/project/:id"
              element={<ProjectDetails />}
            />
          </Routes>
        )}
      </Layout>
    </BrowserRouter>
  );
}

export default App;
