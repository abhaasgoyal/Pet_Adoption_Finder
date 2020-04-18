import React from "react";
// Only event listeners and functions passing to the children that can have a problem with the this variable
// render and componentDidMount() didn't have any problem I guess
class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0,
  };
  // takes some things filters them and passes onto the component
  // instead of this could have done
  // this.props.media.map((photo,index)) in line 27
  // photo.large in lines 30 and 33
  static getDerivedStateFromProps({ media }) {
    // by default image
    let photos = ["http://placecorgi.com/600/600"];
    // only return the lare photos
    if (media.length) {
      photos = media.map(({ large }) => large);
    }
    return { photos };
  }
  handleIndexClick = (event) => {
    // this is undefined .. could have made the construction insted of constructor property function and binded this
    // this. handleIndexClick = this.handleIndexClick.bind(this);
    // other way is to make it an arrow functoin
    this.setState({
      // dataset is in dom and is working on data - index below
      // unary sign + coerces the string which is returned to an integer
      // parseInt could have also done that
      active: +event.target.dataset.index,
    });
  };
  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
