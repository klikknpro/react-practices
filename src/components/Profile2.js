import React from "react";

const Profile2 = () => {
  const user = {
    firstName: "Jon",
    lastName: "Doe",
  };

  const {firstName, lastName} = user;

  return (
    <div>
      <h2>{firstName}</h2>
      <h3>{lastName}</h3>
    </div>
  );
};

function User (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

export default Profile2;
