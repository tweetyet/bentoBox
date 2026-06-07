import { useEffect, useState } from "react";
import axios from "axios";

function MenuPage() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
        );

        setMeals(response.data.meals || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, []);

  if (loading) {
    return (
      <div className="bg-[#121212] min-h-screen flex justify-center items-center">
        <h1 className="text-[#C9A227] text-3xl font-bold">
          Loading Menu...
        </h1>
      </div>
    );
  }

  return (
    <section className="bg-[#121212] text-white min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#C9A227] uppercase tracking-[5px] mb-4">
            Our Menu
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Signature Bento Selection
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover handcrafted Japanese meals made with
            premium ingredients and authentic flavors.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {meals.map((meal) => (
            <div
              key={meal.idMeal}
              className="
                bg-[#181818]
                border border-[#2a2a2a]
                rounded-3xl
                overflow-hidden
                hover:border-[#D9485F]
                hover:-translate-y-2
                transition-all duration-300
              "
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="
                    w-full
                    h-72
                    object-cover
                    hover:scale-105
                    transition duration-500
                  "
                />
              </div>

              {/* Content */}
              <div className="p-6">

                <div className="flex justify-between items-center mb-3">
                  <h2 className="text-2xl font-semibold">
                    {meal.strMeal}
                  </h2>

                  <span className="text-[#C9A227] font-bold">
                    $18.99
                  </span>
                </div>

                <p className="text-[#D9485F] mb-4">
                  {meal.strCategory}
                </p>

                <p className="text-gray-400 line-clamp-3 mb-6">
                  Authentic Japanese cuisine crafted
                  with premium ingredients.
                </p>

                <button
                  className="
                    w-full
                    bg-[#D9485F]
                    hover:bg-[#c63c52]
                    py-3
                    rounded-full
                    font-medium
                    transition
                  "
                >
                  Add to Order
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default MenuPage;