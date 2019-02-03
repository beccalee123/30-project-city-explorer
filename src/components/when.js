import React from 'react';

const render = (condition = false, children = null) => {
  return !!condition ? children : null;
};
const When = props => render(props.condition, props.children);

export default When;