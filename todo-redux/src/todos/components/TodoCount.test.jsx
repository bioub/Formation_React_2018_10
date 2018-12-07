import React from 'react';
import ReactDOM from 'react-dom';
import { TodoCount } from './TodoCount';
import renderer from 'react-test-renderer';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoCount count={10} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('snapshot equals previous snapshot', () => {
  const tree = renderer
    .create(<TodoCount count={10} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

