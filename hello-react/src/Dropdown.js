import React, { Component } from 'react'
import { string, arrayOf } from 'prop-types';
import uuid from 'uuid';

export default class Dropdown extends Component {
  static propTypes = {
    items: arrayOf(string),
  };

  render() {
    const { items = [] }  = this.props;

    const listItems = items.map((item) => <div key={uuid()}>{item}</div>);

    return (
      <div>
        {listItems}
      </div>
    )
  }
}
