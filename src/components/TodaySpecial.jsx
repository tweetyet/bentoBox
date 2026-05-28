const specialMenus = [
  {
    id: 1,
    title: "Fried Sushi",
    description:
      "Juicy and crispy fried sushi rolls with a sweet and savory sauce.",
    price: "$12",
    image: "/herobanner.png",
  },
  {
    id: 2,
    title: "Spicy Ramen",
    description:
      "Delicious ramen noodles cooked with a spicy and savory broth.",
    price: "$10",
    image: "/ramen.jpg",
  },
  {
    id: 3,
    title: "Tempura Bento",
    description:
      "Handcrafted bento box filled with fresh ingredients and traditional Japanese flavors.",
    price: "$15",
    image: "/bento.jpg",
  },
  {
    id: 4,
    title: "Sashimi Platter",
    description:
      "Assorted sashimi platter with a variety of fresh seafood and vegetables.",
    price: "$18",
    image: "/sashimi.jpg",
  },
];
const TodaySpecial = () => {
  return (
    <section className="bg-[#121212] text-[#F8F3ED] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* heading */}
        <div className="text-center mb-12">
          <p className="text-[#C9A227] uppercase tracking-[5px] mb-4">
            Chef's Recommendation
          </p>

          <h2 className="text-5xl font-bold">Today's Menu Special</h2>
        </div>
        {/* card */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialMenus.map((item) => (
            <div
              key={item.id}
              className="bg-[#121212] border border-[#2a2a2a] rounded-3xl p-6 hover:border-[#D9485F] transition duration-300 hover:-translate-y-2"
            >
              {/* Food Image */}
              <div className="flex justify-center mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-52 h-52 object-contain drop-shadow-[0_0_30px_rgba(217,72,95,0.35)]"
                />
              </div>

              {/* Food Info */}
              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-3">{item.title}</h2>

                <p className="text-gray-400 mb-4">{item.description}</p>

                <p className="text-[#D9485F] font-semibold">{item.price}</p>

                <button className="bg-[#D9485F] hover:bg-[#b63a4d] px-6 py-3 rounded-full transition duration-300 mt-4">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TodaySpecial;
