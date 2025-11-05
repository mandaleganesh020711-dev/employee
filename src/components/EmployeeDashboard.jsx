import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function EmployeeDashboard() {
  const [employees, setEmployees] = useState([]);

  const navigate=useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/getAll")
      .then((response) => setEmployees(response.data))
      .catch(() => console.log("Something went wrong"));
  }, []);

  const deleteEmployee = (id) => {
    //http://localhost:8080/delete?id=1

    axios
      .delete(`http://localhost:8080/delete?id=${id}`)
      .then((response) => {
        if (response.data === true) {
          alert("deleted");

          const remainingEmp = employees.filter((emp) => emp.id != id);

          setEmployees(remainingEmp);
        } else {
          alert("Not Deleted");
        }
      })
      .catch((error) => alert(error.mrssage || "something went wromg"));
  };

  const showEmployee = (id) => {
    // nevigate to EmployeeProfile with specific Id

    navigate(`/employee-profile/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <div className="w-full max-w-5xl bg-white shadow-xl rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Employee Dashboard
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">#</th>
                <th className="py-3 px-4 text-left">ID</th>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Password</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {employees.length > 0 ? (
                employees.map((emp, index) => (
                  <tr
                    key={index}
                    className="hover:bg-blue-50 transition-colors duration-200"
                  >
                    <td className="py-3 px-4">{index + 1}</td>
                    <td className="py-3 px-4">{emp.id}</td>
                    <td className="py-3 px-4 font-medium text-gray-800">
                      {emp.name}
                    </td>
                    <td className="py-3 px-4">{emp.email}</td>
                    <td className="py-3 px-4 text-gray-600">{emp.password}</td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() => deleteEmployee(emp.id)}
                        className="bg-red-500 text-white px-3 py-1 mr-3 rounded-lg hover:bg-red-400 transition"
                      >
                        Delete
                      </button>

                      <button
                        onClick={() => showEmployee(emp.id)}
                        className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-red-400 transition"
                      >
                        Show
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-6 text-gray-500 italic"
                  >
                    No employees found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDashboard;
