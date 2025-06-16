


import React, { useState } from "react";


const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Koushik Dutta",
    image: assets.profile_pic,
    email: "koushikdutta5812@gmail.com",
    phone: "+91 6835478548",
    adress: "Vill+P.O-Chandra, P.S-Kenda, Dist-Purulia",
    gender: "Male",
    dob: "2003-08-18",
  });

  const [isEdit, setIsEdit] = useState(false);

  const handleInputChange = (field, value) => {
    setUserData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow-md rounded-md ml-0">
      <img
        src={userData.image}
        alt="Profile"
        className="w-32 h-32 rounded-full object-cover mx-auto mb-4  "
      />

      {isEdit ? (
        <input
          type="text"
          value={userData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          className="block w-full border p-2 mb-2"
        />
      ) : (
        <h2 className="text-center text-xl font-semibold mb-2">
          {userData.name}
        </h2>
      )}

      <hr className="my-4" />

      <div>
        <h3 className="font-bold mb-2">Contact Information</h3>
        <p>Email id: {userData.email}</p>

        <p className="mt-2">Phone:</p>
        {isEdit ? (
          <input
            type="text"
            value={userData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className="block w-full border p-2"
          />
        ) : (
          <p>{userData.phone}</p>
        )}

        <p className="mt-2">Address:</p>
        {isEdit ? (
          <input
            type="text"
            value={userData.adress}
            onChange={(e) => handleInputChange("adress", e.target.value)}
            className="block w-full border p-2"
          />
        ) : (
          <p>{userData.adress}</p>
        )}
      </div>

      <button
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => setIsEdit((prev) => !prev)}
      >
        {isEdit ? "Save" : "Edit"}
      </button>
    </div>
  );
};

export default MyProfile;
