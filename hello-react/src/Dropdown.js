import React, { Component } from 'react'
import { string, arrayOf, func } from 'prop-types';
import uuid from 'uuid';
import styles from './Dropdown.module.scss';

export default class Dropdown extends Component {
  static propTypes = {
    items: arrayOf(string),
    selected: string,
    onSelected: func,
  };

  state = {
    show: false,
  };

  handleClickSelected = () => {
    this.setState({
      show: true,
    })
  };

  handleClickItem = (item) => {
    this.setState({
      show: false,
    });
    this.props.onSelected(item);
  };

  render() {
    const { items = [], selected = items[0] }  = this.props;
    
    const listItems = items.map((item) => 
      <div 
        onClick={() => this.handleClickItem(item)}
        className={styles.DropdownItemsItem}
        key={uuid()}>{item}</div>
    );

    return (
      <div className={styles.Dropdown}>
        <div className={styles.DropdownSelected}
             onClick={this.handleClickSelected}>
          {selected}
        </div>
        <div 
          style={{display: this.state.show ? 'block' : 'none'}}
          className={styles.DropdownItems}>
          {listItems}
        </div>
      </div>
    )
  }
}
