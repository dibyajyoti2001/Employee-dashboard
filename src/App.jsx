import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import config from "./config/config";
import "./App.css";

function App() {
  const url = config.projectUrl;

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setEmployees(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container mx-auto">
      <Dashboard employees={employees} />
    </div>
  );
}

export default App;
