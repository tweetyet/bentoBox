import {
  Fish,
  ChefHat,
  Truck,
  Sparkles,
} from "lucide-react";

const features = [
  {
    id: 1,
    icon: <Fish size={40} />,
    title: "Fresh Ingredients",
    description:
      "Premium seafood and authentic Japanese ingredients delivered fresh daily.",
  },

  {
    id: 2,
    icon: <ChefHat size={40} />,
    title: "Expert Chefs",
    description:
      "Traditional Japanese dishes crafted by experienced master chefs.",
  },

  {
    id: 3,
    icon: <Truck size={40} />,
    title: "Fast Delivery",
    description:
      "Hot and delicious meals delivered quickly to your doorstep.",
  },

  {
    id: 4,
    icon: <Sparkles size={40} />,
    title: "Luxury Experience",
    description:
      "Modern Tokyo-inspired atmosphere with premium dining experience.",
  },
];

function FeatureSection() {
  return (
    <section className="bg-[#121212] text-white py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-13">

          <p className="text-[#C9A227] uppercase tracking-[5px] mb-4">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-bold">
            Authentic Japanese Experience
          </h2>

        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-[#121212] border border-[#2a2a2a] rounded-3xl p-8 hover:border-[#D9485F] transition duration-300 hover:-translate-y-2"
            >

              <div className="text-[#D9485F] mb-6">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default FeatureSection;