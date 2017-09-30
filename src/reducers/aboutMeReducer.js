export default function reducer (state={
  touchedAboutMeReducer: false,
}, action) {
  switch (action.type) {
    case "TOUCHED_ABOUT_ME": {
      return Object.assign({}, state, {touchedAboutMeReducer: true});
    };
  };
  return state;
}