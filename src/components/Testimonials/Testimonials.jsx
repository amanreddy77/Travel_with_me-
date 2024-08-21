import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avatar1 from "../../assets/images/ava-1.jpg";
import avatar2 from "../../assets/images/ava-2.jpg";
import avatar3 from "../../assets/images/ava-3.jpg";

const Testimonials = () => {
  const testimonialsData = [
    {
      pic: avatar1,
      name: "Dileep Reddy",
      description:
        "Our trip with Travelwithme was nothing short of amazing! The attention to detail, friendly partner, and unforgettable experiences made it truly special. Can't wait for the next adventure!",
    },
    {
      pic: avatar2,
      name: "Jane Smith",
      description:
        "Travelwithme exceeded my expectations. From registering to travel buddy, every moment was a delight. The team's expertise and personalized buddy made the journey unforgettable.",
    },
    {
      pic: avatar3,
      name: "Aman Reddy",
      description:
        "I've traveled with a travel buddy, and Travelwithme stands out. The seamless planning, knowledgeable, and partner company set them apart. An incredible way to explore the world!",
    },
    {
      pic: avatar1,
      name: "Emily Davis",
      description:
        "Travelwithme made our dream vacation a reality. The carefully crafted planning, reviews, and genuine persons created an experience we'll cherish forever. Highly recommended!",
    },
    {
      pic: avatar3,
      name: "Alex Turner",
      description:
        "A big shoutout to the Travelwithme team for an unforgettable journey. The blend of adventure and relaxation was perfect. I'll be booking my next slot with them without a doubt.",
    },
  ];

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {testimonialsData.map((data, index) => (
        <div className=" py-4 px-6">
          <p>{data.description}</p>
          <div className="flex items-center gap-4 mt-8">
            <div className="w-[75px] h-[55px] rounded-md overflow-hidden">
              <img
                src={data.pic}
                className="w-full h-full object-cover rounded-2"
                alt=""
              />
            </div>
            <div>
              <div>
                <h5 className="mb-0 mt-3">{data.name}</h5>
                <p className="text-GrayColor">Customer</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Testimonials;
