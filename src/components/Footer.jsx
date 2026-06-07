
const Footer = () => {
  return (
   <footer id="contact" className="bg-[#121212] text-[#F8F3ED] border-t border-[#2a2a2a]">

  <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">

    {/* Logo & Description */}
    <div>

      <h2 className="text-3xl font-bold mb-4">
        <span className="text-[#D9485F]">Bento</span>Box
      </h2>

      <p className="text-gray-400 leading-relaxed">
        Experience authentic Japanese cuisine with fresh sushi,
        warm ramen, and handcrafted bento made with love.
      </p>

    </div>

    {/* Quick Links */}
    <div>

      <h3 className="text-xl font-semibold mb-6 text-[#C9A227]">
        Quick Links
      </h3>

      <ul className="space-y-4 text-gray-400">

        <li className="hover:text-[#D9485F] cursor-pointer transition">
          Home
        </li>

        <li className="hover:text-[#D9485F] cursor-pointer transition">
          Menu
        </li>

        <li className="hover:text-[#D9485F] cursor-pointer transition">
          About
        </li>

        <li className="hover:text-[#D9485F] cursor-pointer transition">
          Contact
        </li>

      </ul>

    </div>

    {/* Opening Hours */}
    <div>

      <h3 className="text-xl font-semibold mb-6 text-[#C9A227]">
        Opening Hours
      </h3>

      <ul className="space-y-4 text-gray-400">

        <li>Monday - Friday: 10AM - 10PM</li>

        <li>Saturday: 11AM - 11PM</li>

        <li>Sunday: 11AM - 9PM</li>

      </ul>

    </div>

    {/* Contact */}
    <div>

      <h3 className="text-xl font-semibold mb-6 text-[#C9A227]">
        Contact Us
      </h3>

      <ul className="space-y-4 text-gray-400">

        <li>📍 Tokyo Street, Japan</li>

        <li>📞 +81 123 456 789</li>

        <li>✉️ bentobox@gmail.com</li>

      </ul>

    </div>

  </div>

  {/* Bottom */}
  <div className="border-t border-[#2a2a2a] py-6 text-center text-gray-500 text-sm">

    © 2026 BentoBox. All Rights Reserved.

  </div>

</footer>
  )
}

export default Footer
