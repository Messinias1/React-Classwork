// import react into your project
import React from 'react';

// call name of file and Component to make a state
class App extends React.Component {
  // state defines properties of the react object, serves as a trigger for events in react
  state = {
    name: "",
    email: "",
    phoneNumber: "",
    submitted: false,
  }
  
  handleSubmit = () => {
    this.setState({
      submitted: true,
    })
  }
  // how to create a method 
  setName = event => {
    console.log(event.target.value)
    this.setState({
      name: event.target.value
    })
  }

  setEmail = event => {
    console.log(event.target.value)
    this.setState({
      email: event.target.value
    })
  }

  setNumber = event => {
    console.log(event.target.value)
    this.setState({
      phoneNumber: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
      <h2>Social Profile</h2>
      <p>An app for your social media profiles</p>
      {!this.state.submitted &&
      <div>
      <input onChange={this.setName} style={{"display": "block"}} placeholder="Name"/>
      <input onChange={this.setEmail} style={{"display": "block"}} placeholder="email"/>
      <input onChange={this.setNumber} style={{"display": "block"}} placeholder="phone number"/>
      <button onClick={this.handleSubmit}>Submit</button>
      </div>}
     
       { this.state.submitted && <div>
      {"Your Name is: " + this.state.name}
      <br/>
      {"Your E-mail is: " + this.state.email}
      <br/>
      {"Your Phone Number is: " + this.state.phoneNumber}
       </div>}
       
       </div>
    );
  }

}

export default App;
