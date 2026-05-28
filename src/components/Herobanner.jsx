const Herobanner = () => {
  return (
    <section className="bg-[#121212] text-[#F8F3ED] min-h-screen flex items-center">

  <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT SIDE */}
    <div>

      <p className="text-[#C9A227] uppercase tracking-[5px] mb-4">
        Japanese Restaurant
      </p>

      <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
        Authentic <span className="text-[#D9485F]">Japanese</span> Taste
      </h1>

      <p className="text-gray-300 text-lg mb-8 max-w-lg">
        Fresh sushi, warm ramen, and handcrafted bento made with love.
      </p>

      <div className="flex gap-4">

        <button className="bg-[#D9485F] hover:bg-[#b63a4d] px-6 py-3 rounded-full transition duration-300">
          Order Now
        </button>

        <button className="border border-[#C9A227] px-6 py-3 rounded-full hover:bg-[#C9A227] hover:text-black transition duration-300">
          View Menu
        </button>

      </div>

    </div>

    {/* RIGHT SIDE */}
    <div className="flex justify-center">

      <img
        src="/foods.png"
        alt="Japanese Food"
        className="w-full max-w-2xl object-contain drop-shadow-[0_0_40px_rgba(217,72,95,0.4)]"
      />

    </div>

  </div>

</section>
  );
};

export default Herobanner;
