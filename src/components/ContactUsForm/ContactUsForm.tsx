import * as React from 'react';
import { Field, InjectedFormProps } from 'redux-form';
import * as v4 from 'uuid/v4';

import Button from '@material-ui/core/Button';

import InputField from './elements/InputField';
import { ContactUsMessage } from '../../features/contactUs/contactUs.types';

export interface Props {
  saveFunction: (values: ContactUsMessage) => void,
}

export const validate = (values: ContactUsMessage) => {
  const errors: Partial<ContactUsMessage> = {};

  if (!values.name) {
    errors.name = 'Name must be filled out';
  }

  if (!values.email) {
    errors.email = 'Email must be filled out';
  }

  if (!values.message) {
    errors.message = 'Message must be filled out';
  }

  return errors;
};

const ContactUsForm: React.SFC<Props & InjectedFormProps<ContactUsMessage, Props>> = (props) => {
  const handleFormSubmit = (values: ContactUsMessage) => {
    const {
      saveFunction,
      reset,
    } = props;
    const newId = v4();
    const preparedData = {
      ...values,
      id: newId,
    };

    saveFunction(preparedData);
    reset();
  };

  return (
    <form onSubmit={props.handleSubmit(handleFormSubmit)}>
      <Field
        label="Your name"
        name="name"
        component={InputField}
        type="text"
      />
      <Field
        label="Your email"
        name="email"
        component={InputField}
        type="email"
      />
      <Field
        label="Message"
        name="message"
        component={InputField}
        type="text"
        multiline={true}
      />
      <Button
        type="submit"
        color="primary"
      >
        Submit message
        </Button>
    </form>
  );
}

export default ContactUsForm;
