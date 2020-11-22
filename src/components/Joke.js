import React from 'react';

const fetch = require('node-fetch');
const url = 'https://official-joke-api.appspot.com/random_joke';


export default class Joke extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      setup: 'Now to get a joke?',
      punchline: 'Click on this element.'
    };
    this.setNewJoke = this.setNewJoke.bind(this);
  }

  setNewJoke() {
    fetch(url, {method: 'GET'})
      .then(res => res.json())
      .then(json => this.setState(json));
  }

  render() {
    return (
      <div className='Card' onClick={this.setNewJoke}>
        <h1>Joke Time</h1>
        <p>{this.state.setup}</p>
        <p>{this.state.punchline}</p>
      </div>
    );
  }
}