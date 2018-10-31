import React, { PureComponent } from 'react'
import { string } from 'prop-types';

export default class TodoItem extends PureComponent {

  static propTypes = {
    todo: string,
  };

  render() {
    return (
      <div>
        {this.props.todo}
        <button>-</button>
      </div>
    )
  }
}
