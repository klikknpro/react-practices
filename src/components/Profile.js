import React from "react";

const Profile = (_) => {
  const names = ["Timi", "Peter", "Laszlo", "Gergo", "Richard"];
  const [name1, name2] = names;

  return (
    <div>
      <h2>{name1}</h2>
      <h2>{name2}</h2>
    </div>
  );
};

export default Profile;

// _ a nem hasznalt parameterek jelolesere
