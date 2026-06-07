import { ShoppingCart } from "lucide-react"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
  <nav className="w-full bg-[#121212] shadow-md backdrop-blur-md fixed top-0 z-50">

  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

    {/* Logo Section */}
    <div>
      <h1 className="text-3xl font-bold text-[#F8F3ED] hover:text-[#D9485F] transition duration-300 cursor-pointer">
        BentoBox
      </h1>

      <p className="text-xs uppercase tracking-[4px] text-[#C9A227]">
        Japanese Restaurant
      </p>
    </div>

    {/* Nav Links */}
    <ul className="flex items-center space-x-8 text-[#F8F3ED] font-medium hidden md:flex">

      <a href="/" className="hover:text-[#D9485F] transition duration-300 cursor-pointer shadow-md">
        Home
      </a>

      <Link to="/menu" className="hover:text-[#D9485F] transition duration-300 cursor-pointer shadow-md">
        Menu
      </Link>

      <a href="#featuresection" className="hover:text-[#D9485F] transition duration-300 cursor-pointer shadow-md">
        About
      </a>

      <a href="#contact" className="hover:text-[#D9485F] transition duration-300 cursor-pointer shadow-md">
        Contact
      </a>

      {/* Order Button */}
      <button className="bg-[#D9485F] hover:bg-[#C9A227] px-5 py-2 rounded-full text-white transition duration-300 flex items-center gap-2">
        Order Now
        <ShoppingCart className="mr-2"/>
        
      </button>

    </ul>

  </div>

</nav>

      
        
        

    
  )
}

export default Navbar
