import * as React from 'react';

import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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
  // submitContactForm:
  classes: {
    paper: string,
    title: string,
  }
}

const ContactUsComponent: React.SFC<Props> = ({ classes }) => {
  return (
    <Paper className={classes.paper}>
      <Typography component="h1" className={classes.title}>
        Contact us!
      </Typography>
    </Paper>
  );
};

export default withStyles(styles)(ContactUsComponent);
