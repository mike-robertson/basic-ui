import { withReducer, compose, withHandlers } from 'recompose';

const toggleDispatch = type =>
  ({ dispatch }) =>
    () => dispatch({ type });

export default compose(
  withReducer(
    'toggledOn',
    'dispatch',
    (state, action) => {
      switch (action.type) {
        case 'TOGGLE_ON':
          return true;
        case 'TOGGLE_OFF':
          return false;
        case 'TOGGLE':
          return !state;
        default:
          return state;
      }
    },
    ({ initialHiddenState, Controls }) => {
      if (initialHiddenState === false) {
        return false;
      }
      return Controls || initialHiddenState;
    },
  ),
  withHandlers({
    toggleOn: toggleDispatch('TOGGLE_ON'),
    toggleOff: toggleDispatch('TOGGLE_OFF'),
    toggle: toggleDispatch('TOGGLE'),
  }),
);
