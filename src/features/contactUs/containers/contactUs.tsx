import { connect } from 'react-redux';

import ContactUsComponent from '../components/contactUs';
import { submitContactForm } from '../contactUs.actions';

import { AppState } from '../../../rootReducer';
import { getSubmittedMessages } from '../contactUs.selectors';

const mapStateToProps = (state: AppState) => ({
  submittedMessages: getSubmittedMessages(state),
})

const mapDispatchToProps = {
  submitContactForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactUsComponent);
