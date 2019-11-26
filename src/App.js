import React from "react";
import "./App.css";
import "rsuite/dist/styles/rsuite-default.css";
import { http } from "./lib/config";
import SearchInput from "./components/SearchInput";
import PhotosList from "./components/PhotosList";
import PhotosRecent from "./components/PhotosRecent";
import { Navbar, IconButton, Icon, Container, Content } from "rsuite";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      photos: [],
      photosRecent: []
    };
    this.onChangeSearchInput = this.onChangeSearchInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    const { searchInput } = this.state;
    event.preventDefault();
    http
      .get(`search?query=${searchInput}`)
      .then(response => {
        console.log(response);
        this.setState({ photos: [...response.data.photos] });
      })
      .catch(e => console.log(e));
  }

  onChangeSearchInput(value) {
    this.setState({ searchInput: value });
  }
  componentDidMount() {
    http
      .get(`curated?`)
      .then(response => {
        console.log(response);
        this.setState({ photosRecent: [...response.data.photos] });
      })
      .catch(e => console.log(e));
  }

  render() {
    const { searchInput, photos, photosRecent } = this.state;
    return (
      <div className="App">
        <Navbar classPrefix="navbar">
          <form onSubmit={this.onSubmit}>
            <SearchInput
              value={searchInput}
              onChangeInput={this.onChangeSearchInput}
            />
            <IconButton
              icon={<Icon icon="search" />}
              appearance="primary"
              classPrefix="search-button"
            />
          </form>
        </Navbar>
        <div className="content">
          {photos.length === 0 ? (
            <PhotosRecent recentPhotos={photosRecent} />
          ) : (
            <PhotosList photos={photos} searchInput={searchInput} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
