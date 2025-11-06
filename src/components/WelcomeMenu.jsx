import { Link } from "react-router-dom"

function WelcomeMenu() {
  return (
    <div>
    <nav class="bg-blue-600 text-white shadow-md">
  <div class="container mx-auto px-6 py-3 flex justify-between items-center">
    
   
    <div class="text-2xl font-bold tracking-wide">
      Employee
    </div>

   
    <div class="space-x-6">

      <Link to={"/login"} class="hover:text-yellow-300 transition">Login</Link>
      <Link to={"/register"} class="bg-yellow-400 text-blue-800 px-4 py-2 rounded-lg hover:bg-yellow-300 transition">
        Register
      </Link>
    </div>

  </div>
</nav>

    </div>
  )
}

export default WelcomeMenu
