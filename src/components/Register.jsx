import axios from "axios";
import { useState } from "react";

function Register() {

  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setEmployee((old) => ({ ...old, [name]: value }));
  };

  const register = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/register", {
        name: employee.name,
        email: employee.email,
        password: employee.password,
      })
      .then((response) => {
        if (response.data) {
          alert("Registerd");
        } else {
          alert("Already Exist");
        }
      })
      .catch((error) => alert(error.message || "Something went wrong"));

      reset();
  };

  const reset = () => {
    setEmployee({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={register}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">
          Register
        </h2>

        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={inputHandler}
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={inputHandler}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label className="block text-gray-600 font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={employee.password}
            onChange={inputHandler}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
