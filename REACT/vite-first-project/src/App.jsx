/* eslint-disable no-unused-vars */
import "./App.css";
import Card from "./components/Card";

function App() {
  //object literal method
  // const user = {
  //   name: "Sudeshna Mohanta",
  //   age: 22,
  //   role: "Frontend Developer",
  //   city: "Baripada",
  // };

  //constructor method
  const User = function (name, age, role, city) {
    this.name = name;
    this.age = age;
    this.role = role;
    this.city = city;
  };

  // class Person {
  //   constructor(name, age) {
  //     this.name = name;
  //     this.age = age;
  //   }
  // }
  const person1 = new User("John Doe", 30);

  // console.log(typeof User);

  const user1 = new User("Sudeshna Mohanta", 22, "Frontend", "Baripada");
  const user2 = new User("Raj", 18, "Student", "Baripada");

  return (
    <div>
      <h1 className="heading">Hello React People!</h1>
      <h2 className="sub-heading">We are learning props and components</h2>
      <div className="main_container">
        <Card user={user1} />
        {/* <Card user={user2} /> */}
      </div>
    </div>
  );
}

export default App;
