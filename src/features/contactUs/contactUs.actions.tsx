import { createStandardAction } from 'typesafe-actions';
import { ContactUsMessage } from './contactUs.types'

export const SUBMIT_CONTACT_FORM = 'CONTACT_FORM/SUBMIT';
export const UPDATE_MESSAGES_LIST = 'CONTACT_PAGE/UPDATE_LIST';

export const submitContactForm = createStandardAction(SUBMIT_CONTACT_FORM)<ContactUsMessage>();
export const updateMessagesList = createStandardAction(UPDATE_MESSAGES_LIST)<ContactUsMessage[]>();

export default {
  submitContactForm,
  updateMessagesList,
};
