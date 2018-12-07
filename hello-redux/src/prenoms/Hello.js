import React from 'react';
import { connect } from 'react-redux';
import { string } from 'prop-types';
import { selectPrenom } from './selectors';

function Hello({name = 'Jean'}) {
  return (
    <div>Bonjour {name} !</div>
  );
}

Hello.propTypes = {
  name: string,
};

const mapStateToProps = (state) => ({
  name: selectPrenom(state),
});

// thunk
// function(mapStateToProps) {
//
// return function() {}
// }
export default connect(mapStateToProps)(Hello);