import { ActionType } from "typesafe-actions";
import contactUsActions from './contactUs.actions';

export interface ContactUsMessage {
  name: string,
  email: string,
  message: string,
};

export interface SubmittedMessage extends ContactUsMessage {
  id: string,
};

export interface TableColumn {
  label: string,
  value: string,
}

export interface ContactUsState {
  readonly submittedMessages: ContactUsMessage[];
};

export type ContactUsActions = ActionType<typeof contactUsActions>;
