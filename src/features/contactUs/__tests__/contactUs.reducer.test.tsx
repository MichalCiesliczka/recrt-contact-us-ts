import contactUsReducer, { initialState } from '../contactUs.reducer';
import { updateMessagesList } from '../contactUs.actions';

describe('contacctUs reducer', () => {
  it('should save messages list when new data comes in', () => {
    const payload = [{
      email: 'user@example.com',
      id: 1,
      message: 'Test message!',
      name: 'Test name',
    }];

    const changedState = contactUsReducer(
      initialState,
      updateMessagesList(payload),
    );
    expect(changedState.submittedMessages).toEqual(payload);
  });
});
