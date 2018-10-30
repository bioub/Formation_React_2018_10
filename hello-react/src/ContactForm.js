import React, { Component } from 'react'

export default class ContactForm extends Component {

  state = {
    prenom: 'Romain',
    nom: 'Bohdanowicz'
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <p>
          Prénom: <input name="prenom" value={this.state.prenom} onChange={this.handleChange} />
        </p>
        <p>
          Nom: <input name="nom" value={this.state.nom} onChange={this.handleChange} />
        </p>
        <p>
          <button>Add</button>
        </p>
      </form>
    )
  }
}
