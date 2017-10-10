import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Display from './Display';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop'



const style = {
  marginRight: 20,
};



class App extends Component {
  constructor(){
    super()
    this.state = {
      temp: [],
      wind: [],
      weatherType: [],
      inputCity: ""
    }
    this.getWeather = this.getWeather.bind(this)
  }
  inputUpdater(e){
    this.setState({
      inputCity: e.target.value
    })
    
  }
  
  getWeather(e){
    axios.get(`http://localhost:4747/api/weather/${this.state.inputCity}`)
    .then(response => {
    this.setState({
temp: Math.round(response.data.main.temp - 273.15),
wind: response.data.name,
weatherType: response.data.weather[0].description
})
})
}

  render() {

    console.log(this.state.temp)
    console.log(this.state.wind)
    console.log(this.state.weatherType)
// const weather = this.state.weatherType.map(item => {
//     return(
//       <Display description={item.weather}  />
//      )
//   })
    return (
      <MuiThemeProvider>
        <h1 className="city">Cities</h1>
      <div className="App">
        <TypistLoop interval={600}>
    {[
      'Miami',
      'New York',
      'London',
      'West Palm Beach',
      'Provo',
      'Stuart',
      'Paris',
      'Amsterdam',
      'Hong Kong',
      'Tokyo',
      'Singapore',
      'Dubai',
      'Milan',
      'Rome',
      'Italy',
      'Shanghai',
      'San Francisco',
      'Los Angeles',
      'Las Vegas',
      'Chicago',
      'Boston'
    ].map(text => <Typist key={text} startDelay={0}><span className="typeLoop">{text}</span></Typist>)}
    </TypistLoop>
    
         <FloatingActionButton className="click" onClick={(e) =>{this.getWeather(e)}} style={style}>
      <ContentAdd /> 
    </FloatingActionButton>
        <input className="ttext" onChange={(e) =>{this.inputUpdater(e)}} placeholder="Type Here"></input>
        <div className="cityName"> {this.state.wind}</div>
        <div className="Cels">{this.state.temp} C</div>
        <div className="today"> {this.state.weatherType}</div>
        
      </div>
      </ MuiThemeProvider>
    );
  }
}

export default App;
