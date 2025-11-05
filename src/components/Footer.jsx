
function Footer() {
  return (
    <div>
     <footer className="bg-gray-600 text-gray-200 py-6 mt-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left - Brand or Logo */}
        <div className="text-lg font-semibold mb-4 md:mb-0">
          © {new Date().getFullYear()} Employee
        </div>

        {/* Center - Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#" className="hover:text-red-600 transition">About</a>
          <a href="#" className="hover:text-white transition">Menu</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>

        {/* Right - Social Icons */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white transition">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-white transition">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-white transition">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
