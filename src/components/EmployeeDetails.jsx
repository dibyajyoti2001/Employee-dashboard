import { useParams } from "react-router-dom";

export default function EmployeeDetails({ employees }) {
  const { id } = useParams();
  const employeeId = Number(id);
  const employee = employees.find((emp) => emp.id === employeeId);
  return (
    <div className="text-center mt-5">
      <h1 className="text-3xl font-semibold">Employee Details</h1>
      {employee ? (
        <div key={id} className="my-10 text-xl font-semibold">
          <h2 className="mb-2">Name: {employee.employee_name}</h2>
          <p className="mb-2">Age: {employee.employee_age}</p>
          <p className="mb-2">Salary: {employee.employee_salary}</p>
          <p className="text-xl">
            Description: Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Cum voluptatem, modi laboriosam consequatur rem vel.
          </p>
        </div>
      ) : (
        <p className="text-3xl font-semibold">Employee not found</p>
      )}
    </div>
  );
}
