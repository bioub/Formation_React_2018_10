import React from 'react';
import { string } from 'prop-types';

function Hello({name = 'Jean'}) {
  return (
    <div>Bonjour {name} !</div>
  );
}

Hello.propTypes = {
  name: string,
};

/*
Hello.defaultProps = {
  name: 'Jean',
};
*/

export default Hello;