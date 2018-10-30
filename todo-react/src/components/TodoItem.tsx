import React, { Component } from 'react'
import { string } from 'prop-types';

export default class TodoItem extends Component {

  static propTypes = {
    todo: string,
  };

  public props!: {todo: string};

  render() {
    return (
      <div>
        {this.props.todo}
      </div>
    )
  }
}
