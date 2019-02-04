import React from 'react';

/**
 *
 *
 * @function render - Renders children based on whether or not a condition was met.
 * @params (condition, children)
 */
const render = (condition = false, children = null) => {
  return !!condition ? children : null;
};


/**
 *
 *
 * @function When - Renders child components.
 * @params (props)
 */
const When = props => render(props.condition, props.children);

export default When;