import React, { Component } from "react";
import PropTypes from "prop-types";

class FarmSearchBox extends Component {
  static propTypes = {
    mapsapi: PropTypes.shape({
      places: PropTypes.shape({
        SearchBox: PropTypes.func,
      }),
      event: PropTypes.shape({
        clearInstanceListeners: PropTypes.func,
      }),
    }).isRequired,
    placeholder: PropTypes.string,
    onPlacesChanged: PropTypes.func,
  };

  static defaultProps = {
    placeholder: "Search...",
    onPlacesChanged: null,
  };

  constructor(props) {
    super(props);
    this.searchInput = React.createRef();
  }

  componentDidMount() {
    const {
      mapsapi: { places },
    } = this.props;

    this.searchBox = new places.SearchBox(this.searchInput.current);
    this.searchBox.addListener("places_changed", this.onPlacesChanged);
  }

  componentWillUnmount() {
    const {
      mapsapi: { event },
    } = this.props;

    event.clearInstanceListeners(this.searchBox);
  }

  onPlacesChanged = () => {
    const { onPlacesChanged } = this.props;

    if (onPlacesChanged) {
      onPlacesChanged(this.searchBox.getPlaces(), this.searchInput);
    }
  };

  render() {
    const { placeholder } = this.props;

    return (
      <input
        ref={this.searchInput}
        placeholder={placeholder}
        type="text"
        style={{
          width: "100%",
          fontSize: "20px",
          boxSizing: "border-box",
        }}
      />
    );
  }
}

export default FarmSearchBox;
