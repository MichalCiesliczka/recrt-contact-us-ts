import * as React from 'react';

import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import ContactUsForm from '../../../components/ContactUsForm';
import MessagesTable from '../../../components/MessagesTable/MessagesTable';
import { ContactUsMessage, SubmittedMessage } from '../contactUs.types';
import { tableColumns } from '../contactUs.constans';

const styles = {
  paper: {
    margin: '30px auto',
    maxWidth: 900,
    padding: 30,
  },
  title: {
    fontSize: 30,
  },
};

interface Props {
  submitContactForm: (values: ContactUsMessage) => void,
  submittedMessages: SubmittedMessage[],
  classes: {
    paper: string,
    title: string,
  }
}

const ContactUsComponent: React.SFC<Props> = ({ submitContactForm, classes, submittedMessages }) => (
  <Paper className={classes.paper}>
    <Typography component="h1" className={classes.title}>
      Contact us!
      </Typography>
    <ContactUsForm
      saveFunction={submitContactForm}
    />
    <MessagesTable
      messages={submittedMessages}
      columns={tableColumns}
    />
  </Paper>
);

export default withStyles(styles)(ContactUsComponent);
