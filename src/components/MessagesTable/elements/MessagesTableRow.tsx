import * as React from 'react';

import { withStyles, createStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { SubmittedMessage, TableColumn } from '../../../features/contactUs/contactUs.types';

interface Props {
  message: SubmittedMessage,
  index: number,
  columns: TableColumn[]
  classes: {
    column: string,
    'column--big': string,
  },
};

const styles = createStyles({
  column: {
    maxWidth: 300,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
});

export const MessagesTableRow: React.SFC<Props> = ({
  message,
  index,
  columns,
  classes,
}) => (
    <TableRow hover={true}>
      <TableCell>{index + 1}</TableCell>
      {
        columns.map(column => (
          <TableCell
            key={column.value}
            className={classes.column}
          >
            {message[column.value]}
          </TableCell>
        ))
      }
    </TableRow>
  );

export default withStyles(styles)(MessagesTableRow);
