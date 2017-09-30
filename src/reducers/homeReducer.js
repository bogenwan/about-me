export default function reducer (state={
  touchedHomeReducer: 'Not Touched',
}, action) {

  switch (action.type) {
    case "TOUCHED_HOME": {
      return Object.assign({}, state, {
        touchedHomeReducer: 'Touched'});
    };
  };
  return state;
};
