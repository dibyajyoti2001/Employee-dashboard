import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EmployeeCard({ employee }) {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(employee.employee_name);
  const [age, setAge] = useState(employee.employee_age);
  const [salary, setSalary] = useState(employee.employee_salary);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleSalaryChange = (e) => {
    setSalary(e.target.value);
  };

  const handleDelete = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  const handleClick = () => {
    navigate(`/employee-detail/${employee.id}`);
  };

  return (
    <div className="mx-10 my-10 max-w-lg rounded overflow-hidden shadow-lg bg-white relative cursor-pointer">
      <div className="px-6 py-4 flex-grow">
        {isEditing ? (
          <>
            <input
              className="border border-gray-300 rounded text-gray-950 mb-2 px-2 py-1"
              value={name}
              onChange={handleNameChange}
            />
            <input
              className="border border-gray-300 rounded text-gray-950 mb-2 px-2 py-1"
              value={age}
              onChange={handleAgeChange}
            />
            <input
              className="border border-gray-300 rounded text-gray-950 px-2 py-1"
              value={salary}
              onChange={handleSalaryChange}
            />
          </>
        ) : (
          <div onClick={handleClick}>
            <div className="text-gray-950 font-medium text-xl mb-2">
              Name: {name}
            </div>
            <p className="text-gray-950 font-medium text-xl mb-2">Age: {age}</p>
            <p className="text-gray-950 font-medium text-xl">
              Salary: {salary}
            </p>
          </div>
        )}
      </div>
      <div className="absolute top-0 right-0 m-2">
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-1"
          onClick={handleEdit}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        <button
          className="bg-red-500 text-white font-bold py-2 px-4 rounded"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
