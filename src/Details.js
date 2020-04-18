import React from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./errorboundary";
import ThemeContext from "./ThemeContext";

class Details extends React.Component {
  state = { loading: true };
  componentDidMount() {
    // throw new Error("lol");
    // Error boundary is vv imp in the fact that if error comes up it won't crash the program
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
  //Destructuring theme by taking only 1 thing from array and not all the variable and then theme[0]
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
          <ThemeContext.Consumer>
            {([theme]) => (
              <button style={{ backgroundColor: theme }}>Adopt {name}</button>
            )}
          </ThemeContext.Consumer>

          <p> {description}</p>
        </div>
      </div>
    );
  }
}
//  <Details props = { props }/> isn't correct cuz this.props.props and change name passing is burdensome
// Faster way of <Details props.
export default function DeatilsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
