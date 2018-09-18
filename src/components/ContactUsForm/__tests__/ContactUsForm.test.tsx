import * as React from 'react';
import ContactUsForm, { validate } from '../ContactUsForm';
import { ContactUsMessage } from '../../../features/contactUs/contactUs.types';
import { shallow } from 'enzyme';

describe('Contact Us Form Component', () => {
  const defaultProps = {
    handleSubmit: fn => fn,
    reset: jest.fn(),
    saveFunction: jest.fn(),
  };

  beforeEach(() => {
    const {
      saveFunction,
      reset,
    } = defaultProps;

    saveFunction.mockClear();
    reset.mockClear();
  });

  it('should render default state', () => {
    shallow(<ContactUsForm {...defaultProps} />)
  });

  it('should call saveFunction from props after submitting a form', () => {
    const wrapper = shallow(<ContactUsForm {...defaultProps} />);

    const form = wrapper.find('form');
    expect(form).toHaveLength(1);
    form.simulate('submit');
    expect(defaultProps.saveFunction.mock.calls.length).toEqual(1);
  });
});

describe('Vaidation function for Contact us form', () => {
  let allValues: ContactUsMessage;

  beforeEach(() => {
    allValues = {
      email: 'email@domain.com',
      message: 'Test message',
      name: 'Test name',
    }
  });

  it('should no return an error when all values are filled', () => {
    expect(validate(allValues)).toEqual({})
  });

  it('should no return name error when name value is missing', () => {
    const preparedValues = { ...allValues };
    delete preparedValues.name;

    expect(validate(preparedValues)).toHaveProperty('name');
  });

  it('should no return email error when email value is missing', () => {
    const preparedValues = { ...allValues };
    delete preparedValues.email;

    expect(validate(preparedValues)).toHaveProperty('email');
  });

  it('should no return message error when message value is missing', () => {
    const preparedValues = { ...allValues };
    delete preparedValues.message;

    expect(validate(preparedValues)).toHaveProperty('message');
  });
});
