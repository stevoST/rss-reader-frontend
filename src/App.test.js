import React from 'react';
import ReactDOM from 'react-dom';
import Feeds from './Feeds';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Feeds />, div);
  ReactDOM.unmountComponentAtNode(div);
});
