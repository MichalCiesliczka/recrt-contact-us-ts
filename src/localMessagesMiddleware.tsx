import { Dispatch, Middleware, MiddlewareAPI } from 'redux';

import { SUBMIT_CONTACT_FORM, UPDATE_MESSAGES_LIST } from './features/contactUs/contactUs.actions';
import { ContactUsMessage } from './features/contactUs/contactUs.types';
import { StateActions } from './rootReducer';

export const LOCAL_STORAGE_KEY = 'messagesList';

const saveMessagesToLS = (list: ContactUsMessage[]) => {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
  } catch (error) {
    // TODO: Handle this error more gentle.
    console.error(`Your browser cannot handle local storage, exited with error: ${error}`);
  }
};

const localMessagesMiddleware: Middleware =
  (store: MiddlewareAPI) =>
  (next: Dispatch) =>
  (action: StateActions) => {
    if (action.type === SUBMIT_CONTACT_FORM) {
      const newMessages = [...store.getState().contactUs.submittedMessages];

      newMessages.push(action.payload);
      saveMessagesToLS(newMessages);

      return next({
        payload: newMessages,
        type: UPDATE_MESSAGES_LIST,
      });
    }

    return next(action);
  };

export default localMessagesMiddleware;
