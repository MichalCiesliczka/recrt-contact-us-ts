import * as React from 'react';
import { shallow } from 'enzyme';
import * as renderer from 'react-test-renderer';

import MessagesTable from '../MessagesTable';
import { tableColumns } from '../../../features/contactUs/contactUs.constans';

describe('<MessagesTable />', () => {
  const defaultProps = {
    columns: tableColumns,
    messages: [
      {
        email: 'email@domain.com',
        id: '1',
        message: 'Test message',
        name: 'Test Name',
      },
    ],
  };

  it('renders without crashing', () => {
    shallow(<MessagesTable {...defaultProps} />);
  });

  it('should render default status', () => {
    const tree = renderer
      .create(
        <MessagesTable {...defaultProps} />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
