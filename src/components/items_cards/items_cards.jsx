import React from "react";
import Colombo from "../../assets/colombo.jpg";
import Galle from "../../assets/Galle_Fort.jpg";
import Matale from "../../assets/matale.jpg";
import Search from "../search/search";
import Couple from "../../assets/planning.jpg";
import { FaClock } from "react-icons/fa6";
import { FaPercent } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { SiReadthedocs } from "react-icons/si";
const ItemsCards = () => {
  const projects = [
    { image: Colombo, location: "COLOMBO", projects: 8 },
    { image: Galle, location: "KALUTARA", projects: 1 },
    { image: Matale, location: "MATALE", projects: 3 },
    { image: Colombo, location: "COLOMBO", projects: 8 },
    { image: Galle, location: "KALUTARA", projects: 1 },
    { image: Matale, location: "MATALE", projects: 3 },
    { image: Colombo, location: "COLOMBO", projects: 8 },
    { image: Galle, location: "KALUTARA", projects: 1 },
  ];

  return (
    <div className="ml-6 overflow-x-hidden overflow-y-hidden">
      <div className="flex justify-center">
        <p className="font-sans text-[24px] sm:text-[28px] md:text-[35px] font-semibold p-4 rounded-[30px] text-white text-center">
          Explore your Land here
        </p>
      </div>

      <div>
        <Search />
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          {projects.map((project, index) => (
            <div key={index} className="w-full md:w-1/4 p-4">
              <div className="rounded overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
                <img
                  className="w-full h-48 object-cover"
                  src={project.image}
                  alt={project.location}
                />
                <div className="px-6 py-4 text-center">
                  <div className="font-bold text-xl text-white mb-2">
                    {project.location}
                  </div>
                  <p className="text-white text-base">
                    {project.projects} PROJECT{project.projects > 1 ? "S" : ""}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div class="flex items-center gap-[5%] relative h-[800px] w-full">
          <div>
            <img
              src={Couple}
              alt="cover1"
              className="h-[800px] w-[900px] object-cover rounded-md"
            />
          </div>

          <div className="text-white mr-[2%]">
            <p className="text-[24px]">Why Choose Us</p>

            <p className="text-[40px] font-bold">
              Creating exceptional real estate journeys{" "}
            </p>
            <p className="text-[15px]">
              Let us assist you in finding the perfect real estate solution. Our
              team values your needs first and helps you customize your search
              for ideal properties, whether you're looking to invest in land or
              a house as an investment.
            </p>

            <div className=" gap-5 items-center mt-5">
              <div className="flex items-center gap-5">
                <FaClock className="text-white p-2 w-[40px] h-[40px]" />
                <div>
                  <p className="text-[20px] font-bold">Efficient Service</p>
                  <p className="text-sm">
                    We value your precious time! We make sure that the entire
                    process is fast and easy.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5 mt-5">
                <FaPercent className="text-white p-2 w-[40px] h-[40px]" />
                <div>
                  <p className="text-[20px] font-bold">Lowest Interest Rate</p>
                  <p className="text-sm">
                    We offers you the lowest interest rates that fits in your
                    budget.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5 mt-5">
                <FaIdCard className="text-white p-2 w-[40px] h-[40px]" />
                <div>
                  <p className="text-[20px] font-bold">Easy Payment Options</p>
                  <p className="text-sm">
                    Get the right land or house with an easy payment plan! We
                    provide you with a selection of payment plans and pride
                    ourselves on our ability to find dream properties within
                    your price range
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5 mt-5">
                <FaShieldAlt className="text-white p-2 w-[40px] h-[40px]" />
                <div>
                  <p className="text-[20px]">
                    From Transactions To Relationships
                  </p>
                  <p className="text-sm">
                    Our customers are important to us. That’s why we strive to
                    establish long – standing relationships with them by
                    carrying out honest and efficient transactions.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5 mt-5">
                <SiReadthedocs className="text-white p-2 w-[40px] h-[40px]" />
                <div>
                  <p className="text-[20px] font-bold">Minimum Documentation</p>
                  <p className="text-sm">
                    Fed up with the traditional documentation process on land
                    purchasing? Don’t worry Our zero-documentation process
                    ensures the ease of the entire process.ons.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsCards;
