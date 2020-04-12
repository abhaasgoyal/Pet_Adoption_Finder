// npm init -y ( auto create )
// npm install -D ( developer level)
// prettier ( purely related to spaces - mechanical doesn't care what the code does
//vs esline ( style - what methods are you using)
// package lock is when you deploy the code to production
// npm ci will install exactly the correct version
// Modules mean that we can use import and export
const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

const App = () => {
  return React.createElement("div", { id: "Something-imp" }, [
    React.createElement("h1", {}, "AdoptMe"),
    React.createElement(Pet, {
      name: "luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, {
      name: "Doink",
      animal: "Cat",
      breed: "Mixed",
    }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
