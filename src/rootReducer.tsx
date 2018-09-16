import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { ContactUsReducer } from './features/contactUs';
import { ContactUsActions } from './features/contactUs/contactUs.types';

export type StateActions = ContactUsActions;

const rootReducer = combineReducers({
  contactUs: ContactUsReducer,
  form: formReducer,
});

const reducer = rootReducer;

export default reducer;
