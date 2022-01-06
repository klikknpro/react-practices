import React from "react";

// ez egy constructor fuggveny
// object constructing
// ennek egy modernebb logikaja lett a CLASS
// akkor ez minek kellett..

// function User(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.fullName = function () {
//     return `${this.firstName} ${this.lastName}`;
//   };
// }

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullName = function() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const Profile4 = () => {
  const newUser = new User("Jon", "Doe");
  console.log(newUser);

  return <div>{newUser.fullName()}</div>;
};

export default Profile4;
