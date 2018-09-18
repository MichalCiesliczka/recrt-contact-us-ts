import * as React from 'react';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';

import MessagesTableHeader from './elements/MessagesTableHeader';
import MessagesTableRowContainer from './elements/MessagesTableRow';

import { SubmittedMessage, TableColumn } from '../../features/contactUs/contactUs.types';

interface Props {
  messages: SubmittedMessage[],
  columns: TableColumn[]
};

const MessagesTable: React.SFC<Props> = ({ messages, columns }) => (
  <Table>
    <TableHead>
      <MessagesTableHeader columns={columns} />
    </TableHead>
    <TableBody>
      {messages
        .map((message, index) => (
          <MessagesTableRowContainer
            key={message.id}
            message={message}
            index={index}
            columns={columns}
          />
        ))
      }
    </TableBody>
  </Table>
);

export default MessagesTable;
