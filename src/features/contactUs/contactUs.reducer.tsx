import { getType } from 'typesafe-actions';

import { updateMessagesList } from './contactUs.actions';
import { ContactUsState, ContactUsActions } from './contactUs.types';
import { LOCAL_STORAGE_KEY } from '../../localMessagesMiddleware';

// ------------------------------------
// State
// ------------------------------------
export const initialState: ContactUsState = {
  submittedMessages: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '""') || [],
};

// ------------------------------------
// Reducer
// ------------------------------------
export default (state: ContactUsState = initialState, action: ContactUsActions) => {
  switch (action.type) {
    case getType(updateMessagesList):
      return {
        ...state,
        submittedMessages: action.payload,
      };

    default:
      return state;
  }
}
