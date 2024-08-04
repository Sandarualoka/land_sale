import React, { useRef } from "react";
import Colombo from "../../assets/colombo.jpg";
import Galle from "../../assets/Galle_Fort.jpg";
import Matale from "../../assets/matale.jpg";
import "./products.css"

const Products = () => {
  const projects = [
    {
      image: Colombo,
      location: "KURUNEGALA - POTHUHERA",
      name: "HIGHWAY RESIDENCE",
      price: "LKR 285,000",
      description: "PER PERCH UPWARDS",
    },
    {
      image: Galle,
      location: "PINNADUWA",
      name: "VIEW POINT",
      price: "LKR 195,000",
      description: "PER PERCH UPWARDS",
    },
    {
      image: Matale,
      location: "KULIYAPITIYA",
      name: "CITY GATE",
      price: "LKR 122,000",
      description: "PER PERCH UPWARDS",
    },
    {
      image: Colombo,
      location: "KURUNEGALA - POTHUHERA",
      name: "HIGHWAY RESIDENCE",
      price: "LKR 285,000",
      description: "PER PERCH UPWARDS",
    },
    {
      image: Galle,
      location: "PINNADUWA",
      name: "VIEW POINT",
      price: "LKR 195,000",
      description: "PER PERCH UPWARDS",
    },
    {
      image: Matale,
      location: "KULIYAPITIYA",
      name: "CITY GATE",
      price: "LKR 122,000",
      description: "PER PERCH UPWARDS",
    },
    {
      image: Colombo,
      location: "KURUNEGALA - POTHUHERA",
      name: "HIGHWAY RESIDENCE",
      price: "LKR 285,000",
      description: "PER PERCH UPWARDS",
    },
    {
      image: Galle,
      location: "PINNADUWA",
      name: "VIEW POINT",
      price: "LKR 195,000",
      description: "PER PERCH UPWARDS",
    },
    {
      image: Matale,
      location: "KULIYAPITIYA",
      name: "CITY GATE",
      price: "LKR 122,000",
      description: "PER PERCH UPWARDS",
    },
  ];

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="text-white mx-[5%]">
      <div>
        <p className="font-normal text-[25px]">Discover</p>
        <p className="text-[35px] font-bold">THE BEST LANDS TO BUY</p>
        <p>
          Search our selection of land for sale in Sri Lanka. Our fast-growing
          portfolio of properties brings you closer to your ideal home. Every
          project is monitored and handled by detail-oriented team members
          committed to serving our customers with the highest possible service
          to guarantee you find your dream property.
        </p>
      </div>

      <div>
        <div className="relative">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
            <button
              onClick={scrollLeft}
              className="text-white p-2 rounded-full shadow-lg focus:outline-none"
            >
              &lt;
            </button>
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
            <button
              onClick={scrollRight}
              className="text-white p-2 rounded-full shadow-lg focus:outline-none"
            >
              &gt;
            </button>
          </div>
          <div ref={scrollRef} className="flex overflow-x-auto hide-scrollbar space-x-4 ml-6">
            {projects.map((project, index) => (
              <div key={index} className="flex-none w-[500px] h-[500px] p-4">
                <div className="rounded overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
                  <img
                    className="w-full h-[300px] object-cover"
                    src={project.image}
                    alt={project.location}
                  />
                  <div className="px-6 py-4 text-center">
                    <div className="font-bold text-xl text-white mb-2">
                      {project.location}
                    </div>
                    <div className="text-white text-lg mb-2">
                      {project.name}
                    </div>
                    <div className="font-bold text-white text-lg mb-2">
                      {project.price}
                    </div>
                    <p className="text-white text-base">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
