import { AppState } from "../../rootReducer";

export const getSubmittedMessages = ({ contactUs }: AppState) => contactUs.submittedMessages;

export default {
  getSubmittedMessages,
};
