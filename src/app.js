//ITERATION 1
// const Pet = () => {
//     return React. createElement("div", {}, [
//         React.createElement("h1", {}, "Luna"),
//         React.createElement("h2", {}, "Dog"),
//         React.createElement("h2", {}, "Havanese"),
//     ])
// }
// Making a componenent and stamping it . To make above flexible pass component

// ITERATION 2
// Interchanging (props) with props doesn't make a difference
// const Pet = props => {
//     return React. createElement("div", {}, [
//         React.createElement("h1", {}, props.name),
//         React.createElement("h2", {}, props.animal),
//         React.createElement("h2", {}, props.breed),
//     ])
// }


// ITERATION 3
// Can also do below to remove repeating use of props ( destructuring props)
const Pet = ({name, animal, breed}) => {
    return React. createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed),
    ])
}


// Basic component
const App = () => {
    return React.createElement (
        "div",
           { id : 'Something-imp'},
           [
            React.createElement("h1", {}, "AdoptMe"),
            React.createElement(Pet , {}, []), // This is the way that JS interprets it
            React.createElement(Pet, {
                name : "luna",
                animal : "Dog",
                breed : "Havanese"
            }),
            React.createElement(Pet, {
                name : "Pepper",
                animal : "Bird",
                breed : "Cockatiel"
                
                }),
            React.createElement(Pet, {
                name : "Doink",
                animal : "Cat",
                breed : "Mixed"
                }),
           ]);
};
// React create element callin the above function is to increase modularity/composability in a program
// As soon as you call render then not rendered gets blown away
ReactDOM.render(React.createElement(App),
document.getElementById("root")
)
// Why is createElement nested ?
// First parameter is either what kinda tag it is/ a compositie component ( passing the component that I have created)
// Second parameter is what properties do you want the component to have <div id = "Something-imp>" hoga render
// Third parameter is the children of the element you want to pass to ( multiple children may you can pass an array of these functions)
// Called variable verity