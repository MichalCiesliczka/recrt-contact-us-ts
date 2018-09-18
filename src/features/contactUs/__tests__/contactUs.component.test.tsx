import * as React from 'react';
import { shallow } from 'enzyme';

import ContactUsComponent from '../components/contactUs';

describe('Contact Us page component', () => {
  const defaultProps = {
    submitContactForm: jest.fn(),
    submittedMessages: [],
  };

  it('should render default status', () => {
    shallow(<ContactUsComponent {...defaultProps} />)
  });
});
