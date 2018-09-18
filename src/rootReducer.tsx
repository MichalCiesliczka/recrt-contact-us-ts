import { combineReducers } from 'redux';
import { reducer as formReducer, FormReducer } from 'redux-form';

import { ContactUsReducer } from './features/contactUs';
import { ContactUsActions, ContactUsState } from './features/contactUs/contactUs.types';

export type StateActions = ContactUsActions;

export interface AppState {
  contactUs: ContactUsState,
  form: FormReducer,
};

const rootReducer = combineReducers({
  contactUs: ContactUsReducer,
  form: formReducer,
});

const reducer = rootReducer;

export default reducer;
