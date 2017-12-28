import React from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import History from "./pages/History";
import API from "./utils/API";
import { Container } from "./components/Grid";
import { Route } from "react-router-dom";


class App extends React.Component {

  state = {
    imageData: "",
    imageResults: [],
    userId: 1,
    userData: [],
    userHistory: [],
    isLoading: true,
    breweryName: "",
    beerName: "",
    beerID: "",
    abv: "",
    description: "",
    loginModalOpen: false,
    reviewModalOpen: false
  };

  componentDidMount() {
    API.getUser( this.state.userId )
    .then(res => {
      this.setState({ userData: res.data });
    });
    API.getHistory( this.state.userId )
    .then(res => {
      this.setState({ userHistory: res.data });
    });
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  toggleModal = (event) => {
    if (event) this.setState({ [event.target.name]: true });
    else {
      this.setState({
        loginModalOpen: false,
        reviewModalOpen: false
      });
    }
  };

  handleBeerInfomation = () => {
    API.postBreweryID({ nameOfBrewery: this.state.imageResults[0] })
    .then(res => {
      console.log("Brewery results: ", res.data);
      if (res.data) {
        this.setState({
          breweryName: res.data.name
        });
      }
    });
    // const extendedName = this.state.imageResults[0] + " " + this.state.imageResults[1];
    API.postBeerID({ imageResults: this.state.imageResults })
    .then(res => {
      console.log("Beer results: ", res.data);
      if (res.data) {
        this.setState({
          isLoading: false,
          beerName: res.data.name,
          abv: res.data.abv + "%",
          description: res.data.description,
        });
        API.postRateBeer( this.state.beerID );
      }
    });
  };

  handleBeerImage = (event) => {
    if (event.base64) this.setState({ imageData: event.base64 });
    if (this.state.imageData) {
      API.postVision({ imageData: this.state.imageData })
      .then(res => {
        console.log("Image results: ", res.data);
        if (res.data) {
          this.setState({ imageResults: 
            [res.data.logoDescription.replace(/[\n\r]/g, ' ').trim(),
             res.data.textDescription.replace(/[\n\r]/g, ' ').trim()] });
          this.handleBeerInfomation();
        }
      })
      .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <Container fullwidth>
          <Nav
            loginModalOpen={this.state.loginModalOpen}
            toggleModal={this.toggleModal}
          />
        </Container>
        <Container fluid>
          <Route exact path="(/|/home)" render={() => (
            <Home
              imageData={this.state.imageData}
              imageResults={this.state.imageResults}
              handleInputChange={this.handleInputChange}
              handleBeerImage={this.handleBeerImage}
              breweryName={this.state.breweryName}
              beerName={this.state.beerName}
              abv={this.state.abv}
              description={this.state.description}
            />
          )}/>
          <Route exact path="/reviews" render={() => (
            <Reviews
              userHistory={this.state.userHistory}
            />
          )}/>
          <Route exact path="/history" render={() => (
            <History
              userHistory={this.state.userHistory}
              reviewModalOpen={this.state.reviewModalOpen}
              toggleModal={this.toggleModal}
            />
          )}/>
        </Container>
      </div>
    );
  }
}

export default App;