export default function EmployeeCard({ employee }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleDelete = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }
  return (
    <div
      className="mx-10 my-10 max-w-lg rounded overflow-hidden shadow-lg bg-white relative"
      onClick={handleClick}
    >
      <div className="px-6 py-4 flex-grow">
        <div className="text-gray-950 font-medium text-xl mb-2">
          Name: {employee.employee_name}
        </div>
        <p className="text-gray-950 font-medium text-xl mb-2">
          Age: {employee.employee_age}
        </p>
        <p className="text-gray-950 font-medium text-xl mb-2">
          Salary: {employee.employee_salary}
        </p>
      </div>
      <div className="absolute top-0 right-0 m-2">
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-1">
          Edit
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
