import { getSubmittedMessages } from '../contactUs.selectors';
import { initialState } from '../contactUs.reducer';
import { reducer as formReducer } from 'redux-form';


const state = {
  contactUs: initialState,
  form: formReducer,
};

describe('MessagesList selectors', () => {
  it('should return messages list', () => {
    expect(getSubmittedMessages(state)).toEqual(initialState.submittedMessages);
  });
});
