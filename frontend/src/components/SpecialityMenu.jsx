import React from "react";
import { Link } from "react-router-dom";
import { specialityData } from "../assets/assets";

const SpecialityMenu = () => {
  return (
    <div
      className="flex flex-col items-center gap-4  text-gray-800 ml-8"
      id="speciality"
    >
      <h1 className="text-3xl font-medium mt-10">Find by Speciality</h1>
      <p className="sm:w1/3 text-center text-sm ">
        Simply browse through our extensive list of trusted doctors,<br /> schedule
        your appointment hassle-free.
      </p>
      <div className="flex sm:justify-center gap-8 text-sm   overflow-scroll">
        {specialityData.map((item, index) => (
          <Link onClick={()=>scrollTo(0, 0)} className= 'flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500 mb-10'   key={index} to={`/doctors/${item.speciality}`}>
            <div className=" w-20 h-20 rounded-full bg-blue-200 flex items-center justify-center mt-7 ">
              <img
                className="w-14  sm:w-14  object-contain"
                src={item.image}
                alt="{item.speciality}"
              />
            </div>
            <p className="mt-2">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
