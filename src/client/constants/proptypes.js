/**
 * proptypes.js
 * Prop-types constants for components
 */

// Node Modules
import PropTypes from 'prop-types';

// Base PropTypes
export const ACTION = PropTypes.func.isRequired;
export const COMPONENT = PropTypes.node;
export const BOOLEAN = PropTypes.bool.isRequired;
export const FUNCTION = PropTypes.func.isRequired;
export const NUMBER = PropTypes.number.isRequired;
export const STRING = PropTypes.string.isRequired;

// Todo Items
const TODO_ITEM = PropTypes.shape({
  name: STRING,
  id: NUMBER,
});
export const TODO_ITEMS = PropTypes.arrayOf(TODO_ITEM);
