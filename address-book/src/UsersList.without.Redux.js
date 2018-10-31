import React, { Component } from 'react'

export default class UsersList extends Component {

  state = {
    users: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({
      loading: true,
    });
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => {
        this.setState({
          loading: false,
          users,
        });
      })
  }

  render() {

    const list = <ul>
      {this.state.users.map((user) => <li key={user.id}>{user.name}</li>)}
    </ul>;

    return (
      <div>
        <h2>Users List</h2>
        {this.state.loading ? <p>Loading...</p> : list}
      </div>
    )
  }
}
