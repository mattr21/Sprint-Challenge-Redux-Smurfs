import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf, deleteSmurf } from '../actions';


class App extends Component {
  state = {
    smurf: { 
      name: '',
      age: '',
      height: '',
    }
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  changeHandler = e => {
    e.persist();
    let value = e.target.value;
    if (e.target.name === "age") {
      value = parseInt(value, 10);
    }
    this.setState(prevState => ({
      smurf: {
        ...prevState.smurf,
        [e.target.name]: value
      }
    }));
  };

  submitHandler = e => {
    // e.preventDefault();
    this.props.addSmurf(this.state.smurf);
    this.setState({ 
      smurf: {
        name: '',
        age: '',
        height: ''
      }});
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="name"
            placeholder="Smurf Name"
            value={this.state.smurf.name}
            onChange={this.changeHandler}
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Smurf Age"
            value={this.state.smurf.age}
            onChange={this.changeHandler}
            required
          />
          <input
            type="text"
            name="height"
            placeholder="Smurf Height"
            value={this.state.smurf.height}
            onChange={this.changeHandler}
            required
          />
          <button style={{ color: "green", cursor: "pointer" }} >Add Smurf</button>
        </form>
        {this.props.smurfs.map(smurf => (
          <div style={{ backgroundColor: 'lightgrey', width: '200px', marginLeft: 'auto', marginRight: 'auto' }} >
              <h3 style={{ paddingTop: '15px' }}>{smurf.name}</h3>
              <p>Age: {smurf.age} </p> 
              <p>Height: {smurf.height}</p>
              <button style={{ color: "red", cursor: "pointer" }} onClick={() => this.props.deleteSmurf(smurf.id)}>Delete Smurf</button>
              <br/><br/>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
})

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf, deleteSmurf }
)(App);
