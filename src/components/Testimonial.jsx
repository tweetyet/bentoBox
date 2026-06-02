import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    id: 1,
    name: "Sadako Yamamoto",
    review:
      "The food was absolutely amazing! The flavors were authentic and the presentation was beautiful. I highly recommend this restaurant to anyone looking for a delicious Japanese dining experience.",
    image: "/ET.jpeg",
  },
  {
    id: 2,
    name: "Jane Smith",
    review:
      "I had a fantastic dining experience at this restaurant. The staff was friendly and attentive, and the food was top-notch. I especially loved the sushi rolls and the ramen. I will definitely be coming back!",
    image: "/user1.jpeg",
  },
  {
    id: 3,
    name: "Tohru Tanaka",
    review:
      "This restaurant exceeded my expectations! The quality of the ingredients and the skill of the chefs really shine through in every dish. I highly recommend trying their signature dishes, you won't be disappointed!",
    image: "/user2.jpeg",
  },
  {
    id: 4,
    name: "Emily Davis",
    review:
      "I had a wonderful dining experience at this restaurant. The atmosphere was cozy and inviting, and the food was delicious. I especially enjoyed the tempura and the bento box. I will definitely be recommending this place to my friends and family!",
    image: "/user_icon.jpeg",
  },
];

const Testimonial = () => {
  return (
    <section className="bg-[#121212] text-[#F8F3ED] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Customers Say
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-[#1E1E1E] rounded-2xl p-6 shadow-lg h-[380px] flex flex-col">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-2 border-[#D9485F]"
                />

                <div className="text-center text-yellow-400 text-xl mb-4">
                  ★★★★★
                </div>

                <p className="text-[#efe5c1] italic text-center flex-grow">
                  "{review.review}"
                </p>

                <h3 className="text-[#D9485F] font-bold text-xl text-center mt-6">
                  {review.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;