import { combineReducers } from 'redux';
import home from './homeReducer';
import aboutMe from './aboutMeReducer';
import showCase from './showCaseReducer';
import contactMe from './contactMeReducer';

export default combineReducers({
  home,
  aboutMe,
  showCase,
  contactMe,
});