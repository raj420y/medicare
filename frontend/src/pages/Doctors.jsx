import React, { useContext, useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import "../style/doctor.css";

const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();

  const [filterDoc, setFilterDoc] = useState([]);

  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);
  return (
    <div >
      <p className=" text-gray-600 ">Browse through the doctors specialist.</p>
      <div className=" flex flex- items-start gap-5 mt-5">
        <div className="  flex flex-col gap-4 tet-sm text-gray-600 ">
          <p onClick={() => speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className="hover:bg-gray-300 cursor-pointer border bg-gray-100 rounded p-2 pr-8 pl-5 active:scale-90 transition duration-300">Gynecologist</p>
          <p onClick={() => speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className=" hover:bg-gray-300 cursor-pointer  border bg-gray-100 rounded p-2 pr-8 pl-5 active:scale-90 transition duration-300">Dermatologist</p>
          <p onClick={() => speciality === 'General_physician' ? navigate('/doctors') : navigate('/doctors/General_physician')} className=" hover:bg-gray-300  cursor-pointer border bg-gray-100 rounded p-2 pr-8 pl-5 active:scale-90 transition duration-300">General physician</p>
          <p onClick={() => speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatrician')} className=" hover:bg-gray-300  cursor-pointer border bg-gray-100 rounded p-2 pr-8 pl-5 active:scale-90 transition duration-300">Pediatrician</p>
          <p onClick={() => speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className=" hover:bg-gray-300  cursor-pointer border bg-gray-100 rounded p-2 pr-8 pl-5 active:scale-90 transition duration-300">Neurologist</p>
          <p onClick={() => speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className=" hover:bg-gray-300 cursor-pointer  border bg-gray-100 rounded p-2 pr-8 pl-5 active:scale-90 transition duration-300">Gastroenterologist</p>
        </div>
        <div className="  w-full grid grid-cols-auto gap-3 p-0 gap-y-4 ">
          {filterDoc.map((item, index) => (
            <div className="">
              <div
                onClick={() => navigate(`/appointment/${item._id}`)}
                className="  border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 flex flex-col  "
                key={index}
              >
                <img
                  className="w-full h-56 object-cover bg-blue-50 "  src={[item.image]} alt=""
                  
                />
                <div className="p-4">
                  <div className="flex items-center gap-2 text-sm text-center text-green-500 ">
                    <p className="w-2 h-2 bg-green-500 rounded-full"></p>{" "}
                    <p>Available</p>
                  </div>
                  <p className="text-gray-900 text-lg font-medium">
                    {item.name}
                  </p>
                  <p className="text-gray-600 text-sm">{item.speciality}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
