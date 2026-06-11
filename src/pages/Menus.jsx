import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const categories = [
  "Bento Boxes",
  "Sushi & Rolls",
  "Appetizers",
  "Ramen",
  "Desserts",
];

const menuItems = [
  {
    id: 1,
    category: "Bento Boxes",
    name: "Classic Salmon Bento",
    price: "$18.99",
    image: "/newbento.png",
    description:
      "Grilled salmon, steamed rice, tamagoyaki and pickled vegetables.",
  },
  {
    id: 2,
    category: "Bento Boxes",
    name: "Teriyaki Chicken Bento",
    price: "$16.99",
    image: "/chicken.png",
    description: "Teriyaki glazed chicken served with rice and seasonal sides.",
  },
  {
    id: 3,
    category: "Bento Boxes",
    name: "American Beef Yakiniku Bento",
    price: "$19.99",
    image: "/beef.png",
    description: "Grilled yakiniku beef with rice, salad and Japanese sides.",
  },
  {
    id: 4,
    category: "Bento Boxes",
    name: "Vegetable Tempura Bento",
    price: "$15.99",
    image: "/tempura.png",
    description: "Assorted tempura vegetables served with steamed rice.",
  },
  {
    id: 5,
    category: "Sushi & Rolls",
    name: "Fried Salmon Sushi Rolls",
    price: "$18.99",
    image: "/fss.png",
    description:
      "Juicy and crispy fried sushi rolls with a sweet and savory sauce.",
  },
  {
    id: 6,
    category: "Ramen",
    name: "Spicy Ramen",
    description:
      "Delicious ramen noodles cooked with a spicy and savory broth.",
    price: "$10",
    image: "/sr.png",
  },
  {
    id: 7,
    category: "Ramen",
    name: "Spicy Ramen",
    description:
      "Delicious ramen noodles cooked with a spicy and savory broth.",
    price: "$10",
    image: "/sr.png",
  },
  {
    id: 8,
    category: "Ramen",
    name: "Spicy Ramen",
    description:
      "Delicious ramen noodles cooked with a spicy and savory broth.",
    price: "$10",
    image: "/sr.png",
  },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("Bento Boxes");

  const filteredItems = menuItems.filter(
    (item) => item.category === activeCategory,
  );

  const [cart, setCart] = useState({});

  const addItem = (id) => {
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const removeItem = (id) => {
    setCart((prev) => {
      const currentCount = prev[id] || 0;

      if (currentCount <= 1) {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      }

      return {
        ...prev,
        [id]: currentCount - 1,
      };
    });
  };
  return (
    <section className="bg-[#121212] text-white min-h-screen">
      {/* HERO */}
      <div className="py-24 text-center px-6">
        <p className="uppercase tracking-[6px] text-[#C9A227] mb-4">Our Menu</p>

        <h1 className="text-3xl md:text-3xl hover:text-[#D9485F] transition duration-300 font-bold mb-6">
          Authentic Japanese Cuisine
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto">
          Experience premium Japanese flavors crafted with traditional
          techniques and the finest ingredients.
        </p>
      </div>

      {/* CATEGORY NAV */}
      <div className="border-y border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto overflow-x-auto">
          <div className="flex min-w-max">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-5 transition-all border-b-2 ${
                  activeCategory === category
                    ? "border-[#D9485F] text-[#D9485F]"
                    : "border-transparent text-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* MENU ITEMS */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold mb-12">{activeCategory}</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map((item) => {
            const count = cart[item.id] || 0;

            return (
              <div
                key={item.id}
                className="bg-[#181818] border border-[#2a2a2a] rounded-3xl overflow-hidden hover:shadow-lg hover:shadow-[#7a6a6c] transition-all"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-64 w-full object-contain drop-shadow-[0_0_40px_rgba(217,72,95,0.4)]"
                />

                <div className="p-6">
                  <div className="flex justify-between mb-4">
                    <h3 className="font-semibold text-lg">{item.name}</h3>

                    <span className="text-[#C9A227] font-bold">
                      {item.price}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm mb-6">
                    {item.description}
                  </p>

                  <div className="mt-4">
                    {count === 0 ? (
                      <button
                        onClick={() => addItem(item.id)}
                        className="w-full bg-[#D9485F] text-white hover:bg-[#C9A227] py-3 rounded-full font-medium transition"
                      >
                        Add to Order
                      </button>
                    ) : (
                      <div className="w-full bg-[#C9A227] rounded-full px-4 py-3 flex items-center justify-between">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
                        >
                          <Minus size={16} />
                        </button>

                        <span className="font-bold text-lg text-black">
                          {count}
                        </span>

                        <button
                          onClick={() => addItem(item.id)}
                          className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
