import * as React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { TableColumn } from '../../../features/contactUs/contactUs.types';

interface Props {
  columns: TableColumn[]
}

const MessagesTableHeader: React.SFC<Props> = ({ columns }) => (
  <TableRow>
    <TableCell>
      No.
    </TableCell>
    {
      columns.map(column => (
        <TableCell
          key={column.value}
        >
          {column.label}
        </TableCell>
      ))
    }
  </TableRow>
);

export default MessagesTableHeader;
