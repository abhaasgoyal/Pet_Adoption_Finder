import React from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";

// Control babel config
class Details extends React.Component {
  // Will start to use this the next time
  state = { loading: true };
  // use above and remove the below lines using babel config ( was a proposal in JS in 2018 but there in 2020)
  /*
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }*/

  componentDidMount() {
    pet.animal(this.props.id).then(({ animal }) => {
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
    const { animal, breed, location, description, media, name } = this.state;
    return (
      <div className="details">
        <Carousel media={media} />
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
