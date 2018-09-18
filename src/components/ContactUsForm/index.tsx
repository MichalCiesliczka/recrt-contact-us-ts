import { reduxForm } from 'redux-form';

import ContactUsFormComponent, { validate, Props } from './ContactUsForm';
import { ContactUsMessage } from '../../features/contactUs/contactUs.types';

export default reduxForm<ContactUsMessage, Props>({
    form: 'contact-us-form',
    validate,
  })(ContactUsFormComponent);
