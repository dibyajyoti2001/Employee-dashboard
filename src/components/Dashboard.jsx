import React, { useState } from "react";
import EmployeeCard from "./EmployeeCard";

export default function Dashboard({ employees }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = employees.filter(
      (employee) => employee.id.toString() === searchTerm
    );
    setSearchResults(results);
  };
  return (
    <>
      <div className="text-center mt-5">
        <input
          type="text"
          placeholder="Search by ID"
          className="border border-gray-300 rounded py-2 px-3 mr-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {searchResults.length > 0
          ? searchResults.map((employee) => (
              <EmployeeCard key={employee.id} employee={employee} />
            ))
          : employees.map((employee) => (
              <EmployeeCard key={employee.id} employee={employee} />
            ))}
      </div>
    </>
  );
}
