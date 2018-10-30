import React, { Component } from 'react'
import { string, arrayOf, func } from 'prop-types';
import uuid from 'uuid';
import styles from './Dropdown.module.scss';
import { connect } from 'react-redux';
import { SELECT_PRENOM } from './constants';
import { selectPrenom } from './selectors';
import { changePrenom } from './actions';

class Dropdown extends Component {
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
    // this.props.dispatch({type: 'SELECT_PRENOM', payload: item});
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

const mapStateToProps = (state) => ({
  selected: selectPrenom(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSelected: (payload) => dispatch(changePrenom(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);