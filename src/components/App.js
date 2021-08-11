import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  // we know we are getting an array back, so init to empty array
  state = { images: [] };

   onSearchSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID pUK3paSBhE03jx8azL1hUb-sHBnOi0VMubNNE5lk1BU",
      },
    });
    // console.log(response);
    // console.log(response.data.results);
    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images 
      </div>
    );
  }
}

export default App;
