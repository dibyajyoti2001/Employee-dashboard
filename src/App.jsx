import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import EmployeeDetails from "./components/EmployeeDetails";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://dummy.restapiexample.com/api/v1/employees"
      );
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <Router>
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Dashboard employees={employees} />} />
          <Route
            path="/employee-detail/:id"
            element={<EmployeeDetails employees={employees} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
