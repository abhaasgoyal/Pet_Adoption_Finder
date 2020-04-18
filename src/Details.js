// One cannot use hooks with classes
// Hard requirement is to have a render method
import React from "react";
import pet from "@frontendmasters/pet";

// Class component implementation
class Details extends React.Component {
  // CDM similar to useEffect in the sense that it only runs once

  constructor(props) {
    // odd ritual that constructed in properties and take it give those properties to react
    super(props);
    // loading gets overwritten by below function but others they are additive in properties
    // only in top level
    // master of it's own state no other components can change it
    this.state = {
      loading: true,
    };
    // does a shallow mere
  }
  componentDidMount() {
    // id of the url is given here to be seen // also this.props is immutable
    pet.animal(this.props.id).then(({ animal }) => {
      // Putting the arrow function is really important in this case since using function() has a difficult to predict value of this
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, 
                    ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false,
      });
    }, console.error());
  }

  render() {
    if (this.state.loading) {
      return <h1> loading </h1>;
    }
    const { animal, breed, location, description, name } = this.state;
    return (
      <div className="details">
        <div>
          <h1> {name}</h1>
          <h2> {`${animal} - ${breed} - ${location}`}</h2>
          <button> Adopt {name}</button>
          <p> {description}</p>
        </div>
      </div>
    );
  }
}

export default Details;
