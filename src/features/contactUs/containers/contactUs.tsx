import { connect } from 'react-redux';

import ContactUsComponent from '../components/contactUs';
import { submitContactForm } from '../contactUs.actions';

const mapDispatchToProps = {
  submitContactForm,
};

export default connect(null, mapDispatchToProps)(ContactUsComponent);