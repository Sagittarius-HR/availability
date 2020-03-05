import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Dogs from './components/dogs.js';
import style from 'styled-components'

const StyledDiv = style.div`
  width: 90%;
  margin: auto;
  color: #6504b5;
  text-align: center;
`;

var url = window.location.hostname === 'localhost' ? 'http://localhost' : 'http://ec2-54-185-0-112.us-west-2.compute.amazonaws.com';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      breedId: 1,
      breed: "A Dog Breed",
      dogs: [],
      location: {
        on: false,
        latitude: 0,
        longitude: 0
      }
    }

    this.coordinates = this.coordinates.bind(this);
  }

  dogFinder() {
    axios.get(url + ':3003/getAllMatchingBreed', {
      params: {
        key: this.state.breedId
      }
    })
    .then((res) => {
      this.setState({
        dogs: res.data
      })
    })
    .catch((err) => {
      if (err) { throw err; }
    })
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.coordinates, this.locationError);
    } else {
      console.log("Geolocation is not supported by this browser.")
    }
  }

  locationError(err) {
    if (err.PERMISSION_DENIED) {
      console.log("User denied location request.");
    } else if (err.POSITION_UNAVAILABLE) {
      console.log("Location unavailable.");
    } else if (err.TIMEOUT) {
      console.log("Location request timed out.");
    } else if (err.UNKNOWN_ERROR) {
      console.log("Location request resulted in an unknown error.");
    } else {
      console.log('Error: ', err);
    }
  }

  coordinates(position) {
    this.setState({
      location: {
        on: true,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }
    
    })
  }

  getBreedName(breedId) {
    let queryString = `?id=${breedId}`;
    axios.get(url + `:3002/api/oneBreed/${queryString}`)
    .then((res) => {
      console.log('res:', res)
      this.setState({
        breed: res.data.about.breedName
      })
    })
    .catch((err) => {
      if (err) { 
        this.setState({
          breed: "Bernese Mountain Dog"
        })
      }
    })
  }

  setBreedId() {

    if (document.getElementById("breedId")) {
      var breedId = document.getElementById("breedId").value;
    } else {
      //if this is running on its own and ID is not available from proxy
      var breedId = Math.ceil(Math.random() * 100);
    } 

    this.setState({
      breedId: breedId 
    })
  }
  
  componentWillMount () {
    //will remove this later when breed Id is attached to URL
    this.setBreedId();
  }

  componentDidMount() {
    this.dogFinder();
    this.getLocation();
    this.getBreedName(this.state.breedId); //this will eventually be the id in the URL
  }

  render() {
    return (
      <div>
        <StyledDiv>
          <h1>{this.state.breed}s Availabile Nearby</h1>
        </StyledDiv>
        <Dogs dogs={this.state.dogs} breedId={this.state.breedId} breed={this.state.breed} location={this.state.location}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('availability'));