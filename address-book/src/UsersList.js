import React, { Component } from 'react'
import { fetchUsers, receiveUsers } from './actions';
import { connect } from 'react-redux';

class UsersList extends Component {


  componentDidMount() {
    if (this.props.users.length) {
      // REDUX a les users en cache
      return;
    }

    this.props.dispatch(fetchUsers());
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => {
        this.props.dispatch(receiveUsers(users));
      })
  }

  render() {

    const list = <ul>
      {this.props.users.map((user) => <li key={user.id}>{user.name}</li>)}
    </ul>;

    return (
      <div>
        <h2>Users List</h2>
        {this.props.loading ? <p>Loading...</p> : list}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  users: state.users,
})

export default connect(mapStateToProps)(UsersList);