import React, { Component } from 'react';
import Navigation from './components/navigation/navigation';
import Logo from './components/logo/logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Rank from './components/Rank/rank';
import Particles from 'react-particles-js';

import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import './App.css';




const particleOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}


const initialState = {
  input: '',
  imageUrl: '',
  box: {},
  route: 'signin',
  signedin: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}
class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  //const [input, setInput] = useState('');
  //const [imageUrl, setImageUrl] = useState('');

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    })
  }

  calculateFaceLocation = (data) => {
    const clarifaiface = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("image");
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: clarifaiface.left_col * width,
      topRow: clarifaiface.top_row * height,
      rightCol: width - (clarifaiface.right_col * width),
      bottomRow: height - (clarifaiface.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({ box: box })
  }
  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    fetch("https://tranquil-mountain-83090.herokuapp.com//imageUrl", {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input: this.state.input
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response) {
          fetch("https://tranquil-mountain-83090.herokuapp.com//image", {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(res => res.json())
            .then(count => this.setState(Object.assign(this.state.user, { entries: count })))
            .catch(console.log)
        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log("Ooops ", err))
  }

  onChangeRoute = (route) => {
    if (route === 'signin') {
      this.setState(initialState) //هيك هيك السايند حيكون فولس
    }
    else if (route === 'home') {
      this.setState({ signedin: true })
    }
    this.setState({ route: route })
  }

  render() {
    const { route, imageUrl, box, signedin, user } = this.state;
    return (
      <div className="App" >
        <Particles className="particle" params={particleOptions} />
        <Navigation signedin={signedin} onChangeRoute={this.onChangeRoute} />
        {
          route === 'home' ? <div>
            <Logo />
            <Rank name={user.name} entries={user.entries} />
            <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
            <FaceRecognition imageUrl={imageUrl} box={box} />
          </div>
            : (route === 'signin' ? <Signin loadUser={this.loadUser} onChangeRoute={this.onChangeRoute} />
              : <Register loadUser={this.loadUser} onChangeRoute={this.onChangeRoute} />)
        }
      </div>
    )
  }
}
export default App;
